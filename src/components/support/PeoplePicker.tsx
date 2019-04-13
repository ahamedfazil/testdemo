import * as React from "react";
import { BaseComponent } from "office-ui-fabric-react/lib/Utilities";
import { IPersonaProps } from "office-ui-fabric-react/lib/Persona";
import {
  IBasePickerSuggestionsProps,
  NormalPeoplePicker,
  ValidationState
} from "office-ui-fabric-react/lib/Pickers";
import pnp, { PrincipalType, PrincipalSource, PrincipalInfo } from "@pnp/pnpjs";
import { IBaseProps } from "@uifabric/utilities";
import { getUserIDFromPP } from "../../services/UserAPI";

interface IPeoplePickerProps extends IBaseProps {
  defaultPeople?: any[];
  getUserNames?: (userVal: any[]) => void;
  allowMulti: boolean;
  disabled?: boolean;
}

const suggestionProps: IBasePickerSuggestionsProps = {
  suggestionsHeaderText: "Suggested People",
  noResultsFoundText: "No results found",
  loadingText: "Loading",
  showRemoveButtons: true
};

export class PeoplePicker extends BaseComponent<IPeoplePickerProps, {}> {
  constructor(props: IPeoplePickerProps) {
    super(props);
  }

  public render(): JSX.Element {
    const peoplePicker = (
      <NormalPeoplePicker
        disabled={this.props.disabled}
        onResolveSuggestions={this._onFilterChanged}
        getTextFromItem={this._getTextFromItem}
        pickerSuggestionsProps={suggestionProps}
        className={"ms-PeoplePicker"}
        key={"normal"}
        onValidateInput={this._validateInput}
        onChange={this._onItemsChange}
        removeButtonAriaLabel={"Remove"}
        inputProps={{
          "aria-label": "People Picker"
        }}
        onInputChange={this._onInputChange}
        defaultSelectedItems={this.props.defaultPeople}
        itemLimit={this.props.allowMulti ? undefined : 1}
      />
    );
    return (
      <div>
        {this.props.disabled ? (
          <div className="display-people-picker">{peoplePicker}</div>
        ) : (
          <div>{peoplePicker}</div>
        )}
      </div>
    );
  }

  private _getTextFromItem(persona: IPersonaProps): string {
    return persona.primaryText as string;
  }

  private _onItemsChange = (items: any[]): void => {
    if (items.length > 0) {
      items.map(async user => {
        user.Id = await getUserIDFromPP([user]);
        this.props.getUserNames([user]);
      });
    } else {
      this.props.getUserNames(items);
    }
  };

  private _onFilterChanged = (
    filterText: string,
    currentPersonas: IPersonaProps[]
  ): IPersonaProps[] | Promise<IPersonaProps[]> => {
    if (filterText && (this.props.allowMulti || currentPersonas.length < 1)) {
      return pnp.sp.utility
        .searchPrincipals(
          filterText,
          PrincipalType.All,
          PrincipalSource.All,
          "",
          5
        )
        .then((principals: PrincipalInfo[] | any) => {
          return principals.results.reduce(
            (filtered: any, principal: any) => {
              filtered.push({
                key: principal.LoginName,
                primaryText: principal.DisplayName,
                secondaryText: `${principal.Email}`
              });
              filtered = this._removeDuplicates(filtered, currentPersonas);
              // filtered = filtered.splice(0, 5);
              return filtered;
            },
            []
          );
        });
    } else {
      return [];
    }
  };

  private _removeDuplicates(
    personas: IPersonaProps[],
    possibleDupes: IPersonaProps[]
  ) {
    return personas.filter(
      persona => !this._listContainsPersona(persona, possibleDupes)
    );
  }

  private _listContainsPersona(
    persona: IPersonaProps,
    personas: IPersonaProps[]
  ) {
    if (!personas || !personas.length || personas.length === 0) {
      return false;
    }
    return (
      personas.filter(item => item.primaryText === persona.primaryText).length >
      0
    );
  }

  private _validateInput = (input: string): ValidationState => {
    if (input.indexOf("@") !== -1) {
      return ValidationState.valid;
    } else if (input.length > 1) {
      return ValidationState.warning;
    } else {
      return ValidationState.invalid;
    }
  };

  private _onInputChange(input: string): string {
    const outlookRegEx = /<.*>/g;
    const emailAddress = outlookRegEx.exec(input);

    if (emailAddress && emailAddress[0]) {
      return emailAddress[0].substring(1, emailAddress[0].length - 1);
    }
    return input;
  }
}
