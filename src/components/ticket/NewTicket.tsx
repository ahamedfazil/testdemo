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
  DatePicker,
  Dropdown,
  TextField,
  Checkbox
} from "office-ui-fabric-react";
import { dropdownOptions } from "../../utils/Utilities";
import update from "immutability-helper";
import { CONST } from "../../utils/const";
import { KendoCombo } from "../support/KendoCombo";

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
          name={"Title"} // provide here state name -> ex: this.state."Title"
          placeholder={"Enter Title"}
          onChange={this._onTextChange}
          disabled={false}
        />
        Label ComboBox
        <KendoCombo
          textValue={this.state.Label}
          getLabelValue={value => {
            this.setState({ Label: value });
          }}
          fetchList={CONST.Lists.Labels.ListName}
          fetchColumn={CONST.Lists.Labels.Columns.Title.Internal_Name}
        />
        Topic ComboBox
        <KendoCombo
          textValue={this.state.Topics}
          getLabelValue={value => {
            this.setState({ Topics: value });
          }}
          fetchList={CONST.Lists.Topic.ListName}
          fetchColumn={CONST.Lists.Topic.Columns.Title.Internal_Name}
        />
        Checkbox
        <Checkbox
          name={"Training"}
          label={"Training"}
          defaultChecked={this.state.Training}
          onChange={this._onCheckboxChange}
        />
        DatePicker
        {/* <DatePicker
          value={this.state.toDate}
          minDate={this.state.fromDate && this.state.fromDate}
          placeholder={"DD-MM-YYYY"}
          allowTextInput={true}
          onSelectDate={val => {
            this.onDateChange(val, false);
          }}
          formatDate={_onFormatDate}
        /> */}
      </div>
    );
  }

  private _onTextChange(event: any, value: any) {
    this.changedValue(event.target.name, value);
  }

  private _onCheckboxChange = (event: any, isChecked: boolean) => {
    console.log("TCL: private_onCheckboxChange -> event", event);
    this.changedValue(event.target.name, isChecked);
  };

  private changedValue(key: string, value: any) {
    const newState = update(this.state, {
      [key]: { $set: value }
    });
    this.setState(newState);
  }
}
