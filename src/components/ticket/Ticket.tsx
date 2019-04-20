import * as React from "react";
import { ITicketProps } from "../../models/ITicketProps";
import { debounce } from "throttle-debounce";
import {
  ITicketLocalState,
  ITicketDictionary,
  IDialogBlocking,
  ITicketForm
} from "../../models/ITicketState";
import { initialTicketLocalState } from "../../store/initialState";
import { getTicketDictionary } from "../../services/DictionaryAPI";
import { PeoplePicker } from "../support/PeoplePicker";
import {
  PrimaryButton,
  Dropdown,
  TextField,
  Checkbox,
  DatePicker,
  Spinner,
  SpinnerSize,
  DefaultButton
} from "office-ui-fabric-react";
import {
  dropdownOptions,
  getSpecificArrayFromJSONArray,
  tagPickerOptionGenerator,
  kendoComboOptionGenerator,
  onFormatDate,
  getDateFromString
} from "../../utils/Utilities";
import update from "immutability-helper";
import { CONST } from "../../utils/const";
import { KendoCombo } from "../support/KendoCombo";
import { KatsTagPicker } from "../support/KatsTagPicker";
import {
  createTicket,
  getTicketByID,
  updateTicket
} from "../../services/TicketAPI";
import "./Ticket.scss";
import { ErrorMessage } from "../support/ErrorMessage";
import { DialogBlocking } from "../support/DialogBlocking";
import { IUserState } from "../../models/IUserState";
import { ISiteState } from "../../models/ISiteState";

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
    if (
      this.props.store.site.siteInfo.isEditForm ||
      this.props.store.site.siteInfo.isViewForm
    ) {
      let localTicketForm: ITicketForm = Object.assign(
        {},
        this.state.ticketForm
      );
      let itemID = this.props.store.site.siteInfo.itemID;
      await getTicketByID(itemID, localTicketForm)
        .then(item => {
          this.setState({
            ticketForm: item
          });
        })
        .catch(ticketByIDError => {
          console.log("ticketByIDError", ticketByIDError);
          this.setState({
            ticketForm: ticketByIDError
          });
        });
    } else {
      this.setState({
        ticketForm: {
          ...this.state.ticketForm,
          isFetched: true
        }
      });
    }
  }

  public render(): JSX.Element {
    const siteState: ISiteState = this.props.store.site;
    const formState: ITicketForm = this.state.ticketForm;
    const isEdit: boolean = siteState.siteInfo.isEditForm;
    const userState: IUserState = this.props.store.user;
    const ticketDictionary: ITicketDictionary = this.props.store.ticket
      .ticketDictionary;
    const dialogBlocking: IDialogBlocking = this.state.dialogBlocking;
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
      <div className="ms-Grid new-ticket">
        <div className="ms-Grid-row">
          <div className="cell header ms-font-xxl ms-Grid-col ms-sm12 ms-md12 ms-lg12">
            {isEdit ? "Edit Ticket" : "Create New Ticket"}
          </div>
        </div>

        {!(ticketDictionary.isFetched && formState.isFetched) ? (
          this.props.store.ticket.error || formState.error ? (
            <ErrorMessage error={"Something went wrong."} />
          ) : (
            <Spinner
              style={{ margin: "200px" }}
              size={SpinnerSize.large}
              label="Retrieving field and ticket values..."
            />
          )
        ) : (
          <div>
            <div className="ms-Grid-row">
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <label className="ms-Label">Ticket ID</label>
                <TextField
                  value={this.state.ticketForm.TicketId}
                  name={CONST.Lists.Tickets.Columns.TicketId.Internal_Name}
                  placeholder={"KATS-00001"}
                  onChange={this._onTextChange}
                  disabled={true}
                />
              </div>
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <label className="ms-Label">Created</label>
                <TextField
                  value={this.state.ticketForm.Created}
                  name={
                    CONST.Lists.Tickets.Columns.Created_x0020_Date.Internal_Name
                  }
                  disabled={true}
                />
              </div>
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <label className="ms-Label">Status</label>
                <Dropdown
                  placeholder={"Select Status"}
                  options={dropdownOptions(ticketDictionary.status)}
                  selectedKey={this.state.ticketForm.OData__Status}
                  onChange={(event: any, option: any) => {
                    this.setState({
                      ticketForm: {
                        ...this.state.ticketForm,
                        OData__Status: option.key
                      }
                    });
                  }}
                />
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <label className="ms-Label">Sentinel GIS ID</label>
                <Dropdown
                  placeholder={"Select Sentinel GIS ID"}
                  options={dropdownOptions(ticketDictionary.sentinelGisId)}
                  selectedKey={
                    this.state.ticketForm.Sentinel_x0020_GIS_x0020_ID
                  }
                  onChange={(event: any, option: any) => {
                    this.setState({
                      ticketForm: {
                        ...this.state.ticketForm,
                        Sentinel_x0020_GIS_x0020_ID: option.key
                      }
                    });
                  }}
                />
              </div>
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <label className="ms-Label">Priority</label>
                <Dropdown
                  placeholder={"Select Priority"}
                  options={[
                    { key: 0, text: "Normal" },
                    { key: 1, text: "Urgent" }
                  ]}
                  selectedKey={this.state.ticketForm.IsUrgent}
                  onChange={(event: any, option: any) => {
                    this.setState({
                      ticketForm: {
                        ...this.state.ticketForm,
                        IsUrgent: option.key
                      }
                    });
                  }}
                />
              </div>
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <label className="ms-Label">Submitter</label>
                <PeoplePicker
                  getUserNames={person => {
                    this._onPeoplePicker(
                      CONST.Lists.Tickets.Columns.Submitted_x0020_ById
                        .Internal_Name,
                      person
                    );
                    // this.setState({
                    //   ticketForm: {
                    //     ...this.state.ticketForm,
                    //     Submitted_x0020_ById: person
                    //   }
                    // });
                  }}
                  allowMulti={false}
                  defaultPeople={this.state.ticketForm.Submitted_x0020_ById}
                  disabled={false}
                  placeholder={"Provide Submitter"}
                />
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <label className="ms-Label">Engagement Name</label>
                <TextField
                  value={this.state.ticketForm.Engagement_x0020_Name}
                  name={
                    CONST.Lists.Tickets.Columns.Engagement_x0020_Name
                      .Internal_Name
                  }
                  placeholder={"Enter Engagement name"}
                  onChange={this._onTextChange}
                  disabled={false}
                />
              </div>
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <label className="ms-Label">Period End</label>
                <DatePicker
                  value={getDateFromString(
                    this.state.ticketForm.Accounting_x0020_Period_x0020_En
                  )}
                  placeholder={"DD/MM/YYYY"}
                  allowTextInput={true}
                  onSelectDate={val => {
                    this.setState({
                      ticketForm: {
                        ...this.state.ticketForm,
                        Accounting_x0020_Period_x0020_En: onFormatDate(val)
                      }
                    });
                  }}
                  formatDate={onFormatDate}
                />
              </div>
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <label className="ms-Label">Assignee</label>
                <PeoplePicker
                  getUserNames={person => {
                    this._onPeoplePicker(
                      CONST.Lists.Tickets.Columns.AssigneeId.Internal_Name,
                      person
                    );
                    // this.setState({
                    //   ticketForm: {
                    //     ...this.state.ticketForm,
                    //     AssigneeId: person
                    //   }
                    // });
                  }}
                  defaultPeople={this.state.ticketForm.AssigneeId}
                  allowMulti={false}
                  disabled={true}
                  placeholder={"Provide Assignee"}
                />
              </div>
            </div>
            <div className="ms-Grid-row" style={{ paddingTop: "3px" }}>
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <label className="ms-Label">Engagement Type</label>
                <Dropdown
                  placeholder={"Select Engagement Type"}
                  options={dropdownOptions(ticketDictionary.engagementType)}
                  title={
                    CONST.Lists.Tickets.Columns.Engagement_x0020_Type
                      .Internal_Name
                  }
                  selectedKeys={this.state.ticketForm.Engagement_x0020_Type}
                  multiSelect
                  onChange={(event: any, option: any) => {
                    const index = this.state.ticketForm.Engagement_x0020_Type.indexOf(
                      option.key
                    );
                    this._onMultiSelectDropdown(
                      CONST.Lists.Tickets.Columns.Engagement_x0020_Type
                        .Internal_Name,
                      option,
                      index
                    );
                  }}
                />
              </div>
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <label className="ms-Label">Charge Code</label>
                <TextField
                  value={this.state.ticketForm.Engagement_x0020_Charge_x0020_Co}
                  name={
                    CONST.Lists.Tickets.Columns.Engagement_x0020_Charge_x0020_Co
                      .Internal_Name
                  }
                  placeholder={"Enter Charge Code"}
                  onChange={this._onTextChange}
                  disabled={false}
                />
              </div>
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <label className="ms-Label">Audit Team</label>
                <PeoplePicker
                  getUserNames={person => {
                    this._onPeoplePicker(
                      CONST.Lists.Tickets.Columns.Audit_x0020_Team_x0020_CCId
                        .Internal_Name,
                      person
                    );
                  }}
                  allowMulti={true}
                  defaultPeople={
                    this.state.ticketForm.Audit_x0020_Team_x0020_CCId
                  }
                  disabled={false}
                  placeholder={"Provide Audit Team"}
                />
              </div>
            </div>
            <div className="ms-Grid-row" style={{ paddingTop: "2px" }}>
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <label className="ms-Label">Accounting Frameworks</label>
                <Dropdown
                  placeholder={"Select Accounting Frameworks"}
                  options={dropdownOptions(
                    ticketDictionary.accountingFramework
                  )}
                  selectedKeys={
                    this.state.ticketForm.Accounting_x0020_Framework
                  }
                  multiSelect
                  onChange={(event: any, option: any) => {
                    const index = this.state.ticketForm.Accounting_x0020_Framework.indexOf(
                      option.key
                    );
                    this._onMultiSelectDropdown(
                      CONST.Lists.Tickets.Columns.Accounting_x0020_Framework
                        .Internal_Name,
                      option,
                      index
                    );
                  }}
                />
              </div>
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <br />
                <Checkbox
                  name={
                    CONST.Lists.Tickets.Columns.Required_x0020_Consultation
                      .Internal_Name
                  }
                  label={"Required Consultation"}
                  defaultChecked={
                    this.state.ticketForm.Required_x0020_Consultation
                  }
                  onChange={this._onCheckboxChange}
                />
              </div>
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <label className="ms-Label">Engagement RI</label>
                <PeoplePicker
                  getUserNames={person => {
                    this._onPeoplePicker(
                      CONST.Lists.Tickets.Columns.Responsible_x0020_IndividualId
                        .Internal_Name,
                      person
                    );
                    // this.setState({
                    //   ticketForm: {
                    //     ...this.state.ticketForm,
                    //     Responsible_x0020_IndividualId: person
                    //   }
                    // });
                  }}
                  allowMulti={false}
                  defaultPeople={
                    this.state.ticketForm.Responsible_x0020_IndividualId
                  }
                  disabled={false}
                  placeholder={"Provide Engagement RI"}
                />
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <label className="ms-Label">Auditing Standards</label>
                <Dropdown
                  placeholder={"Select Auditing Standards"}
                  options={dropdownOptions(ticketDictionary.auditingStandard)}
                  selectedKeys={this.state.ticketForm.Auditing_x0020_Standards}
                  multiSelect
                  onChange={(event: any, option: any) => {
                    const index = this.state.ticketForm.Auditing_x0020_Standards.indexOf(
                      option.key
                    );
                    this._onMultiSelectDropdown(
                      CONST.Lists.Tickets.Columns.Auditing_x0020_Standards
                        .Internal_Name,
                      option,
                      index
                    );
                  }}
                />
              </div>
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <label className="ms-Label">Category</label>
                <KendoCombo
                  textValue={this.state.ticketForm.OData__Category}
                  getLabelValue={value => {
                    this.setState({
                      ticketForm: {
                        ...this.state.ticketForm,
                        OData__Category: value
                      }
                    });
                    //Setting support group
                    this.settingSupportGroup(value);
                  }}
                  placeholder={"Enter Category"}
                  isRemote={false}
                  fullValues={kendoComboOptionGenerator(categoryTitleOptions)}
                />
              </div>
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <label className="ms-Label">Support Team</label>
                &nbsp;
                <i
                  className="ms-Icon ms-Icon--Group"
                  style={{ fontSize: "18px" }}
                  aria-hidden="true"
                />
                <TextField
                  value={this.state.ticketForm.Support_x0020_Team}
                  readOnly={true}
                  placeholder={"Set Based On Category"}
                />
              </div>
            </div>
            <div className="ms-Grid-row" style={{ paddingTop: "2px" }}>
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <label className="ms-Label">Subject</label>
                <TextField
                  value={this.state.ticketForm.Title}
                  name={CONST.Lists.Tickets.Columns.Title.Internal_Name}
                  placeholder={"Enter Title"}
                  onChange={this._onTextChange}
                  disabled={false}
                />
              </div>
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <label className="ms-Label">Topics</label>
                <KatsTagPicker
                  getValues={val => {
                    this.setState({
                      ticketForm: {
                        ...this.state.ticketForm,
                        Topics: val
                      }
                    });
                  }}
                  headerText="Suggested Topics"
                  noResultText="No Topics Found"
                  getOnBlur={() => {
                    // if (this.state.ticketForm.fields.length === 0) {
                    //   this.setState({
                    //     formErrors: {
                    //       ...this.state.ticketForm.formErrors,
                    //       label: true
                    //     }
                    //   });
                    // }
                  }}
                  placeholder={"Enter Topics"}
                  values={this.state.ticketForm.Topics}
                  options={tagPickerOptionGenerator(categoryTopicsOptions)}
                />
              </div>
              <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                <label className="ms-Label">Watchers</label>
                <PeoplePicker
                  getUserNames={person => {
                    console.log("TCL: person", person);
                    this._onPeoplePicker(
                      CONST.Lists.Tickets.Columns.WatcherId.Internal_Name,
                      person
                    );
                    // this.setState({
                    //   ticketForm: {
                    //     ...this.state.ticketForm,
                    //     WatcherId: person
                    //   }
                    // });
                  }}
                  allowMulti={true}
                  defaultPeople={this.state.ticketForm.WatcherId}
                  disabled={false}
                  placeholder={"Provide Watchers"}
                />
              </div>
            </div>
            <div className="ms-Grid-row">
              <div className="cell ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-TextField">
                <label className="ms-Label">Detailed Analysis</label>
                <TextField
                  value={this.state.ticketForm.Detailed_x0020_Analysis}
                  name={
                    CONST.Lists.Tickets.Columns.Detailed_x0020_Analysis
                      .Internal_Name
                  }
                  placeholder={"Provide Description"}
                  onChange={this._onTextChange}
                  multiline
                  rows={5}
                  disabled={false}
                />
              </div>
            </div>
            {userState.currentUser.isSupportUser && (
              <div>
                <div className="ms-Grid-row">
                  <div className="cell ms-Grid-col ms-sm12 ms-md12 ms-lg12 ms-TextField">
                    <label className="ms-Label">Conclusion</label>
                    <TextField
                      value={this.state.ticketForm.Conclusion}
                      name={
                        CONST.Lists.Tickets.Columns.Conclusion.Internal_Name
                      }
                      placeholder={"Enter Conclusion"}
                      onChange={this._onTextChange}
                      multiline
                      rows={5}
                    />
                  </div>
                </div>
                <div className="ms-Grid-row">
                  <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                    <label className="ms-Label">Ticket Type</label>
                    <Dropdown
                      placeholder={"Select Ticket Type"}
                      options={dropdownOptions(ticketDictionary.ticketType)}
                      selectedKey={this.state.ticketForm.Ticket_x0020_Type}
                      onChange={(event: any, option: any) => {
                        this.setState({
                          ticketForm: {
                            ...this.state.ticketForm,
                            Ticket_x0020_Type: option.key
                          }
                        });
                      }}
                    />
                  </div>
                  <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                    <br />
                    <Checkbox
                      name={CONST.Lists.Tickets.Columns.Training.Internal_Name}
                      label={"Training candidate"}
                      defaultChecked={this.state.ticketForm.Training}
                      onChange={this._onCheckboxChange}
                    />
                  </div>
                  <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                    <br />
                    <Checkbox
                      name={CONST.Lists.Tickets.Columns.FAQ.Internal_Name}
                      label={"FAQ candidate"}
                      defaultChecked={this.state.ticketForm.FAQ}
                      onChange={this._onCheckboxChange}
                    />
                  </div>
                </div>
                <div className="ms-Grid-row" style={{ paddingTop: "2px" }}>
                  <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                    <label className="ms-Label">Labels</label>
                    <KatsTagPicker
                      getValues={val => {
                        this.setState({
                          ticketForm: {
                            ...this.state.ticketForm,
                            Label: val
                          }
                        });
                      }}
                      getOnBlur={() => {}}
                      headerText="Suggested Labels"
                      noResultText="No Label Found"
                      placeholder={"Enter Label"}
                      values={this.state.ticketForm.Label}
                      options={tagPickerOptionGenerator(
                        ticketDictionary.labels
                      )}
                    />
                  </div>
                  <div className="cell ms-Grid-col ms-sm6 ms-md4 ms-lg4 ms-TextField">
                    <br />
                    <Checkbox
                      name={
                        CONST.Lists.Tickets.Columns.Add_x0020_to_x0020_KB
                          .Internal_Name
                      }
                      label={"Knowledge Base candidate"}
                      defaultChecked={
                        this.state.ticketForm.Add_x0020_to_x0020_KB
                      }
                      onChange={this._onCheckboxChange}
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="ms-Grid-row">
              <div className="cell ms-Grid-col ms-sm12 ms-md12 ms-lg12">
                <DefaultButton
                  className="ticket-btn"
                  text={"Cancel"}
                  onClick={e => {
                    e.preventDefault();
                    window.location.href = "../";
                  }}
                />
                <PrimaryButton
                  className="ticket-btn"
                  primary={true}
                  disabled={false}
                  onClick={e => {
                    this._onButtonClick(e, isEdit);
                  }}
                >
                  {isEdit ? "Update Ticket" : "Create Ticket"}
                </PrimaryButton>
              </div>
            </div>
          </div>
        )}
        <DialogBlocking
          showConfirmDialog={dialogBlocking.showConfirmDialog}
          showProgress={dialogBlocking.showProgress}
          showProgressDialog={dialogBlocking.showProgressDialog}
          dialogTitle={dialogBlocking.dialogTitle}
          progressDialogText={dialogBlocking.progressDialogText}
          error={dialogBlocking.error}
          getDialogResponse={(res: boolean) => {
            if (res) {
              window.location.href = "../";
            } else {
              this.setState({
                dialogBlocking: update(this.state.dialogBlocking, {
                  showConfirmDialog: { $set: false },
                  showProgressDialog: { $set: false }
                })
              });
            }
          }}
        />
      </div>
    );
  }

  //#region helper functions
  private _onTextChange(event: any, value: any) {
    this.changedValue(event.target.name, value);
  }

  private _onCheckboxChange = (event: any, isChecked: boolean) => {
    this.changedValue(event.target.name, isChecked);
  };

  private _onPeoplePicker = (propertyName: string, person: any[]) => {
    if (person) {
      const newState = update(this.state, {
        ticketForm: {
          [propertyName]: { $set: person }
        }
      });
      this.setState(newState);
    }
  };

  private _onMultiSelectDropdown = (
    propertyName: string,
    option: any,
    index?: number
  ) => {
    if (option.selected) {
      const newState = update(this.state, {
        ticketForm: {
          [propertyName]: { $push: [option.key] }
        }
      });
      this.setState(newState);
    } else {
      const newState = update(this.state, {
        ticketForm: {
          [propertyName]: { $splice: [[index, 1]] }
        }
      });
      this.setState(newState);
    }
  };

  private changedValue(key: string, value: any) {
    const newState = update(this.state, {
      ticketForm: {
        [key]: { $set: value }
      }
    });
    this.setState(newState);
  }

  private settingSupportGroup(category: string) {
    const supportTeam = this.props.store.ticket.ticketDictionary.category.filter(
      cat => cat.Title === category
    )[0];
    if (supportTeam) {
      this.setState({
        ticketForm: {
          ...this.state.ticketForm,
          Support_x0020_Team: supportTeam.Support_x0020_Team
            ? supportTeam.Support_x0020_Team.Name
            : ""
        }
      });
    } else {
      this.setState({
        ticketForm: {
          ...this.state.ticketForm,
          Support_x0020_Team: ""
        }
      });
    }
  }
  //#endregion

  private _onButtonClick(event: any, isEdit?: boolean) {
    event.preventDefault();
    // check for form validation, go ahead only if form is valid

    const newDialogState = update(this.state.dialogBlocking, {
      showConfirmDialog: { $set: false },
      showProgressDialog: { $set: true },
      showProgress: { $set: true },
      progressDialogText: { $set: "saving the ticket..." },
      dialogTitle: {
        $set: this.props.store.site.siteInfo.isNewForm
          ? "Creating New Ticket"
          : "Updating Ticket"
      },
      error: { $set: null }
    });
    this.setState({
      dialogBlocking: newDialogState
    });
    if (!isEdit) {
      createTicket(this.state.ticketForm).then((res: any) => {
        if (res) {
          this.setState({
            dialogBlocking: update(this.state.dialogBlocking, {
              showConfirmDialog: { $set: false },
              showProgressDialog: { $set: true },
              showProgress: { $set: false },
              progressDialogText: { $set: "" },
              dialogTitle: { $set: "Ticket Created Successfully" },
              error: { $set: null }
            })
          });
        } else {
          this.setState({
            dialogBlocking: update(this.state.dialogBlocking, {
              showConfirmDialog: { $set: false },
              showProgressDialog: { $set: true },
              showProgress: { $set: false },
              progressDialogText: { $set: "" },
              dialogTitle: { $set: "Something went wrong" },
              error: { $set: "Something went wrong" }
            })
          });
        }
      });
    } else {
      updateTicket(
        this.state.ticketForm,
        this.props.store.site.siteInfo.itemID
      ).then((res: any) => {
        if (res) {
          this.setState({
            dialogBlocking: update(this.state.dialogBlocking, {
              showConfirmDialog: { $set: false },
              showProgressDialog: { $set: true },
              showProgress: { $set: false },
              progressDialogText: { $set: "" },
              dialogTitle: { $set: "Ticket Updated Successfully" },
              error: { $set: null }
            })
          });
        } else {
          this.setState({
            dialogBlocking: update(this.state.dialogBlocking, {
              showConfirmDialog: { $set: false },
              showProgressDialog: { $set: true },
              showProgress: { $set: false },
              progressDialogText: { $set: "" },
              dialogTitle: { $set: "Something went wrong" },
              error: { $set: "Something went wrong" }
            })
          });
        }
      });
    }

    // setTimeout(() => {
    //   // using immutable helper
    //   const newDialogState = update(this.state.dialogBlocking, {
    //     showConfirmDialog: { $set: false },
    //     showProgressDialog: { $set: true },
    //     showProgress: { $set: true },
    //     progressDialogText: { $set: "saving your ticket..." },
    //     dialogTitle: { $set: "Creating New Ticket" },
    //     error: { $set: null }
    //   });
    //   this.setState({
    //     dialogBlocking: newDialogState
    //   });
    // }, 3000);
  }
}
