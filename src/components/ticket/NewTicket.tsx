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
  Label,
  DatePicker
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
      <div className="ms-Grid">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField" />
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField" />
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <label className="ms-Label">Status</label>
            <Dropdown
              placeholder={"Select"}
              options={dropdownOptions(ticketDictionary.status)}
              selectedKey={this.state.OData__Status}
              onChange={(option: any, event: any) => {
                this.setState({
                  OData__Status: event.key
                });
              }}
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <label className="ms-Label">Ticket ID</label>
            <TextField
              value={this.state.TicketId}
              name={CONST.Lists.Tickets.Columns.TicketId.Internal_Name}
              placeholder={"KATS-00001"}
              onChange={this._onTextChange}
              disabled={true}
            />
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <label className="ms-Label">Created</label>
            <TextField
              value="17/04/2017"
              name={
                CONST.Lists.Tickets.Columns.Created_x0020_Date.Internal_Name
              } // provide here state name -> ex: this.state."Title"
              placeholder={"17/04/2017"}
              onChange={this._onTextChange}
              disabled={true}
            />
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <label className="ms-Label">Submitter</label>
            <PeoplePicker
              getUserNames={person => {
                this.setState({
                  Submitted_x0020_ById: person
                });
              }}
              allowMulti={false}
              defaultPeople={this.state.Submitted_x0020_ById}
              disabled={false}
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <label className="ms-Label">Sentinel GIS ID</label>
            <Dropdown
              placeholder={"Select"}
              options={dropdownOptions(ticketDictionary.sentinelGisId)}
              selectedKey={this.state.Sentinel_x0020_GIS_x0020_ID}
              onChange={(option: any, event: any) => {
                this.setState({
                  Sentinel_x0020_GIS_x0020_ID: event.key
                });
              }}
            />
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <label className="ms-Label">Priority</label>
            <Dropdown
              placeholder={"Select"}
              options={[{ key: 0, text: "Normal" }, { key: 1, text: "Urgent" }]}
              selectedKey={this.state.IsUrgent}
              onChange={(option: any, event: any) => {
                this.setState({
                  IsUrgent: event.key
                });
              }}
            />
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <label className="ms-Label">Assignee</label>
            <PeoplePicker
              getUserNames={person => {
                this.setState({
                  AssigneeId: person
                });
              }}
              allowMulti={false}
              disabled={true}
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <label className="ms-Label">Engagement Name</label>
            <TextField
              value={this.state.Title}
              name={
                CONST.Lists.Tickets.Columns.Engagement_x0020_Name.Internal_Name
              }
              placeholder={"Enter Engagement name"}
              onChange={this._onTextChange}
              disabled={false}
            />
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <label className="ms-Label">Period End</label>
            {/* <DatePicker
          value={this.state.Accounting_x0020_Period_x0020_En}
          placeholder={"DD-MM-YYYY"}
          allowTextInput={true}
          onSelectDate={val => {
            this.onDateChange(val, false);
          }}
          formatDate={this._onFormatDate}
        /> */}
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <label className="ms-Label">Audit Team</label>
            <PeoplePicker
              getUserNames={person => {
                this.setState({
                  Submitted_x0020_ById: person
                });
              }}
              allowMulti={true}
              defaultPeople={this.state.Audit_x0020_Team_x0020_CCId}
              disabled={false}
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <label className="ms-Label">Engagement Type</label>
            <Dropdown
              placeholder={"Select"}
              options={dropdownOptions(ticketDictionary.engagementType)}
              selectedKey={this.state.Engagement_x0020_Type}
              onChange={(option: any, event: any) => {
                this.setState({
                  Engagement_x0020_Type: event.key
                });
              }}
            />
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <label className="ms-Label">Charge code</label>
            <TextField
              value={this.state.Engagement_x0020_Charge_x0020_Co}
              name={
                CONST.Lists.Tickets.Columns.Engagement_x0020_Charge_x0020_Co
                  .Internal_Name
              } // provide here state name -> ex: this.state."Title"
              placeholder={"Enter Charge code"}
              onChange={this._onTextChange}
              disabled={false}
            />
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <label className="ms-Label">Engagement RI</label>
            <PeoplePicker
              getUserNames={person => {
                this.setState({
                  Responsible_x0020_IndividualId: person
                });
              }}
              allowMulti={false}
              defaultPeople={this.state.Responsible_x0020_IndividualId}
              disabled={false}
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <label className="ms-Label">Accounting Frameworks</label>
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
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <br />
            <Checkbox
              name={"Required Consultation"}
              label={"Required Consultation"}
              defaultChecked={this.state.Required_x0020_Consultation}
              onChange={this._onCheckboxChange}
            />
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <label className="ms-Label">Watchers</label>
            <PeoplePicker
              getUserNames={person => {
                this.setState({
                  WatcherId: person
                });
              }}
              allowMulti={true}
              defaultPeople={this.state.WatcherId}
              disabled={false}
            />
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <label className="ms-Label">Auditing Standards</label>
            <Dropdown
              placeholder={"Select"}
              options={dropdownOptions(ticketDictionary.auditingStandard)}
              selectedKey={this.state.Auditing_x0020_Standards}
              onChange={(option: any, event: any) => {
                this.setState({
                  Auditing_x0020_Standards: event.key
                });
              }}
            />
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <label className="ms-Label">Category</label>
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
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <label className="ms-Label">Support Team</label>
            <i
              className="ms-Icon ms-Icon--Group"
              style={{ fontSize: "25px" }}
              aria-hidden="true"
            />
            <Label>{this.state.Support_x0020_Team}</Label>
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <label className="ms-Label">Subject</label>
            <TextField
              value={this.state.Title}
              name={CONST.Lists.Tickets.Columns.Title.Internal_Name} // provide here state name -> ex: this.state."Title"
              placeholder={"Enter Title"}
              onChange={this._onTextChange}
              disabled={false}
            />
          </div>
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
            <label className="ms-Label">Topics</label>
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
          </div>
        </div>
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg8 ms-TextField">
            <label className="ms-Label">Detailed Analysis</label>
            <TextField
              value={this.state.Detailed_x0020_Analysis}
              name={
                CONST.Lists.Tickets.Columns.Detailed_x0020_Analysis
                  .Internal_Name
              } // provide here state name -> ex: this.state."Title"
              placeholder={"Add description"}
              onChange={this._onTextChange}
              multiline
              rows={10}
              disabled={false}
            />
          </div>
        </div>
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
    } else {
      this.setState({
        Support_x0020_Team: ""
      });
    }
  }

  private _onButtonClick(event: any) {
    event.preventDefault();
    // check for form validation, go ahead only if form is valid
    createTicket(this.state);
  }

  private onDateChange(event: any) {
    event.preventDefault();
  }

  private _onFormatDate() {}
}
