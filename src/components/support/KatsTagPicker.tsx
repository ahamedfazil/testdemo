import * as React from "react";
import { TagPicker } from "office-ui-fabric-react/lib/components/pickers/TagPicker/TagPicker";

interface IKatsTagPickerProps {
  defaultValue?: any[];
  getValues?: (val: any[]) => void;
  getOnBlur?: () => void;
  disabled?: boolean;
  options?: any;
  name?: string;
  headerText?: string;
  noResultText?: string;
}

export class KatsTagPicker extends React.Component<IKatsTagPickerProps, {}> {
  constructor(props: IKatsTagPickerProps) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <div>
        <TagPicker
          onChange={this._onItemsChanges}
          onResolveSuggestions={this._onFilterChanged}
          defaultSelectedItems={this.props.defaultValue}
          pickerSuggestionsProps={{
            suggestionsHeaderText: this.props.headerText,
            noResultsFoundText: this.props.noResultText
          }}
          onEmptyInputFocus={tagList =>
            this._onEmptyInputFocus("", tagList, this.props.options)
          }
          onBlur={() => this.props.getOnBlur()}
        />
      </div>
    );
  }

  private _onItemsChanges = (items: any[]) => {
    let fullItems: any[] = [];
    if (items) {
      items.map(item => {
        fullItems.push(item.key);
      });
    }
    this.props.getValues(fullItems);
  };

  private _onEmptyInputFocus = (
    filterText: string,
    tagList: any[],
    _testTag: any[]
  ) => {
    return _testTag
      .filter(tag => {
        return tag.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
      })
      .filter(item => !this._listContainsDocument(item, tagList));
  };

  private _onFilterChanged = (
    filterText: string,
    itemList: { key: string; name: string }[]
  ): { key: string; name: string }[] => {
    return filterText
      ? this.props.options
          .filter(
            (item: any) =>
              item.name.toLowerCase().indexOf(filterText.toLowerCase()) === 0
          )
          .filter((item: any) => !this._listContainsDocument(item, itemList))
      : [];
  };

  private _listContainsDocument(
    tag: { key: string; name: string },
    tagList: { key: string; name: string }[]
  ) {
    if (!tagList || !tagList.length || tagList.length === 0) {
      return false;
    }
    return tagList.filter(compareTag => compareTag.key === tag.key).length > 0;
  }
}
