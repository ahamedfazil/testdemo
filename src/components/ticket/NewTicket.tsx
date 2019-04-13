import * as React from "react";
import { ITicketProps } from "../../models/ITicketProps";
import { debounce } from "throttle-debounce";
import {
  ITicketLocalState,
  ITicketDictionary
} from "../../models/ITicketState";
import { initialTicketLocalState } from "../../store/initialState";
import { getTicketDictionary } from "../../services/DictionaryAPI";
import { PeoplePicker } from "../support/PeoplePicker";
import {
  PrimaryButton,
  Dropdown,
  TextField,
  Checkbox,
  Label
} from "office-ui-fabric-react";
import {
  dropdownOptions,
  getSpecificArrayFromJSONArray,
  tagPickerOptionGenerator,
  kendoComboOptionGenerator
} from "../../utils/Utilities";
import update from "immutability-helper";
import { CONST } from "../../utils/const";
import { KendoCombo } from "../support/KendoCombo";
import { KatsTagPicker } from "../support/KatsTagPicker";
import { createTicket } from "../../services/TicketAPI";

export class NewTicket extends React.Component<
  ITicketProps,
  ITicketLocalState
> {
  constructor(props: ITicketProps) {
    super(props);
    this._onTextChange = this._onTextChange.bind(this);
    this.changedValue = debounce(300, this.changedValue);
    this.state = initialTicketLocalState(this.props.store);
  }

  async componentDidMount() {
    await getTicketDictionary(this.props);
  }

  public render(): JSX.Element {
    const ticketDictionary: ITicketDictionary = this.props.store.ticket
      .ticketDictionary;
    let categoryTitleOptions: any[] = [];
    let categoryTopicsOptions: any[] = [];
    if (ticketDictionary.isFetched) {
      categoryTitleOptions = getSpecificArrayFromJSONArray(
        ticketDictionary.category,
        CONST.Lists.Category.Columns.Title.Internal_Name
      );
      categoryTopicsOptions = getSpecificArrayFromJSONArray(
        ticketDictionary.category,
        CONST.Lists.Category.Columns.Topic.Internal_Name
      );
    }

    return (
      <div>
        People Picker
        <PeoplePicker
          getUserNames={person => {
            this.setState({
              Submitted_x0020_ById: person
            });
          }}
          allowMulti={true}
          defaultPeople={this.state.Submitted_x0020_ById}
          disabled={false}
        />
        Dropdown
        <Dropdown
          placeholder={"Select"}
          options={dropdownOptions(ticketDictionary.accountingFramework)}
          selectedKey={this.state.Accounting_x0020_Framework}
          onChange={(option: any, event: any) => {
            this.setState({
              Accounting_x0020_Framework: event.key
            });
          }}
        />
        Textbox
        <TextField
          value={this.state.Title}
          name={CONST.Lists.Tickets.Columns.Title.Internal_Name} // provide here state name -> ex: this.state."Title"
          placeholder={"Enter Title"}
          onChange={this._onTextChange}
          disabled={false}
        />
        Category ComboBox
        <KendoCombo
          textValue={this.state._Category}
          getLabelValue={value => {
            this.setState({ _Category: value });
            //Setting support group
            this.settingSupportGroup(value);
          }}
          isRemote={false}
          fullValues={kendoComboOptionGenerator(categoryTitleOptions)}
        />
        Suppot Group
        <br />
        <i
          className="ms-Icon ms-Icon--Group"
          style={{ fontSize: "25px" }}
          aria-hidden="true"
        />
        <Label>{this.state.Support_x0020_Team}</Label>
        Checkbox
        <Checkbox
          name={"Training"}
          label={"Training"}
          defaultChecked={this.state.Training}
          onChange={this._onCheckboxChange}
        />
        Tag picker - Label
        <KatsTagPicker
          getValues={val => {
            this.setState({
              Label: val
            });
          }}
          headerText="Suggested Labels"
          noResultText="No Labels Found"
          getOnBlur={() => {
            // if (this.state.fields.length === 0) {
            //   this.setState({
            //     formErrors: {
            //       ...this.state.formErrors,
            //       label: true
            //     }
            //   });
            // }
          }}
          defaultValue={this.state.Label}
          options={tagPickerOptionGenerator(ticketDictionary.labels)}
        />
        Tag picker - Topic
        <KatsTagPicker
          getValues={val => {
            this.setState({
              Topics: val
            });
          }}
          headerText="Suggested Topics"
          noResultText="No Topics Found"
          getOnBlur={() => {
            // if (this.state.fields.length === 0) {
            //   this.setState({
            //     formErrors: {
            //       ...this.state.formErrors,
            //       label: true
            //     }
            //   });
            // }
          }}
          defaultValue={this.state.Topics}
          options={tagPickerOptionGenerator(categoryTopicsOptions)}
        />
        {/*  DatePicker
        <DatePicker
          value={this.state.toDate}
          minDate={this.state.fromDate && this.state.fromDate}
          placeholder={"DD-MM-YYYY"}
          allowTextInput={true}
          onSelectDate={val => {
            this.onDateChange(val, false);
          }}
          formatDate={_onFormatDate}
        /> */}
        Button
        <PrimaryButton
          primary={true}
          disabled={false}
          onClick={e => {
            this._onButtonClick(e);
          }}
        >
          Save Ticket
        </PrimaryButton>
      </div>
    );
  }

  private _onTextChange(event: any, value: any) {
    this.changedValue(event.target.name, value);
  }

  private _onCheckboxChange = (event: any, isChecked: boolean) => {
    this.changedValue(event.target.name, isChecked);
  };

  private changedValue(key: string, value: any) {
    const newState = update(this.state, {
      [key]: { $set: value }
    });
    this.setState(newState);
  }

  private settingSupportGroup(category: string) {
    const supportTeam = this.props.store.ticket.ticketDictionary.category.filter(
      cat => cat.Title === category
    )[0];
    if (supportTeam) {
      this.setState({
        Support_x0020_Team: supportTeam.Support_x0020_Team
          ? supportTeam.Support_x0020_Team.Name
          : ""
      });
    }
  }

  private _onButtonClick(event: any) {
    event.preventDefault();
    // check for form validation, go ahead only if form is valid
    createTicket(this.state);
  }
}
