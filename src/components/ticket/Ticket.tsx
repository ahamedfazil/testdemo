import * as React from "react";
import { ITicketProps } from "../../models/ITicketProps";
import { debounce } from "throttle-debounce";
import {
  ITicketLocalState,
  ITicketDictionary,
  IDialogBlocking
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
import { createTicket, getTicketByID } from "../../services/TicketAPI";
import "./Ticket.scss";
import { ErrorMessage } from "../support/ErrorMessage";
import { DialogBlocking } from "../support/DialogBlocking";
import { IUserState } from "../../models/IUserState";
import { ISiteState } from "../../models/ISiteState";
import CustomGroup from "../support/CustomGroup";
import { TicketUsers } from "../support/TicketUsers";
import { TicketHeader } from "../support/TicketHeader";
import { TicketInfo } from "../support/TicketInfo";
import { TicketEngagementInfo } from "../support/TicketEngagement";
import { TicketRequestDetail } from "../support/TicketRequestDetail";
import { TicketSupportFields } from "../support/SupportFields";

export class Ticket extends React.Component<ITicketProps, ITicketLocalState> {
  constructor(props: ITicketProps) {
    super(props);
    this._onTextChange = this._onTextChange.bind(this);
    this.changedValue = debounce(300, this.changedValue);
    this.state = initialTicketLocalState(this.props.store);
  }

  async componentDidMount() {
    await getTicketDictionary(this.props);
    if (this.props.store.site.siteInfo.isEditForm) {
      // get value from sharepoint using ID this.props.store.site.siteInfo.itemID
      let itemID = this.props.store.site.siteInfo.itemID;
      await getTicketByID(itemID).then(item => this.setState(item));
      // await function(). then( value => this.setState({
      //   TicketId: "dd",
      //   Ticket_x0020_Type: "dd"
      // }))// -> create function in services/TicketAPI.ts file
      // map the value to the state ITicketLocalState
    }
  }

  public render(): JSX.Element {
    const siteState: ISiteState = this.props.store.site;
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
        <TicketHeader isEdit={isEdit} className="header" />

        {!ticketDictionary.isFetched ? (
          this.props.store.ticket.error ? (
            <ErrorMessage error={"Something went wrong."} />
          ) : (
            <Spinner
              style={{ margin: "200px" }}
              size={SpinnerSize.large}
              label="Retrieving field values..."
            />
          )
        ) : (
          <div>
            <div className="ms-Grid-row">
              <CustomGroup
                groupCollapse={null}
                item={
                  <TicketRequestDetail
                    submitter={this.state.Submitted_x0020_ById}
                    subject={this.state.Title}
                    detailedAnalysis={this.state.Detailed_x0020_Analysis}
                    priority={this.state.IsUrgent}
                    getTicketRequestValue={(key, value) => {
                      this._onTextChange(key, value);
                    }}
                  />
                }
                isCollapsed={false}
                title={"Detail"}
              />
            </div>
            <div className="ms-Grid-row">
              <CustomGroup
                groupCollapse={null}
                item={
                  <TicketInfo
                    ticketId={this.state.TicketId}
                    status={this.state.OData__Status}
                    ticketDictionary={this.props.store.ticket.ticketDictionary}
                    category={this.state.OData__Category}
                    supportTeam={this.state.Support_x0020_Team}
                    requiredConsultation={
                      this.state.Required_x0020_Consultation
                    }
                    topics={this.state.Topics}
                    accountingFrameworks={this.state.Accounting_x0020_Framework}
                    auditingStandards={this.state.Auditing_x0020_Standards}
                    getTicketInfoValue={(key, value) => {
                      this._onTextChange(key, value);
                    }}
                    getTicketOptions={(key, option) => {
                      this.changedValue(key, option);
                    }}
                  />
                }
                isCollapsed={false}
                title={"Ticket Information"}
              />
            </div>
            <div className="ms-Grid-row">
              <CustomGroup
                groupCollapse={null}
                item={
                  <TicketEngagementInfo
                    ticketDictionary={this.props.store.ticket.ticketDictionary}
                    engagementName={this.state.Engagement_x0020_Name}
                    sentinelGisId={this.state.Sentinel_x0020_GIS_x0020_ID}
                    engagementType={this.state.Engagement_x0020_Type}
                    periodEnd={this.state.Accounting_x0020_Period_x0020_En}
                    chargeCode={this.state.Engagement_x0020_Charge_x0020_Co}
                    getEngagementInfoValue={(key, value) => {
                      this._onTextChange(key, value);
                      this.changedValue(key, value);
                    }}
                  />
                }
                isCollapsed={false}
                title={"Engagement Information"}
              />
            </div>
            <div className="ms-Grid-row">
              <CustomGroup
                groupCollapse={null}
                item={
                  <TicketUsers
                    assigneeId={this.state.AssigneeId}
                    engagementRiId={this.state.Responsible_x0020_IndividualId}
                    auditTeam={this.state.Audit_x0020_Team_x0020_CCId}
                    watchers={this.state.WatcherId}
                    getUserValue={(key, value) => {
                      this.changedValue(key, value);
                    }}
                  />
                }
                isCollapsed={false}
                title={"People"}
              />
            </div>
            {userState.currentUser.isSupportUser && (
              <div className="ms-Grid-row">
                <CustomGroup
                  groupCollapse={null}
                  item={
                    <TicketSupportFields
                    ticketDictionary={this.props.store.ticket.ticketDictionary}
                    conclusion={this.state.Conclusion}
                      ticketType={this.state.Ticket_x0020_Type}
                      training={this.state.Training}
                      addToKb={this.state.Add_x0020_to_x0020_KB}
                      faq={this.state.FAQ}
                      labels={this.state.Label}
                      getSupportFieldValues={(key, value) => {
                        this.changedValue(key, value);
                        this._onCheckboxChange(event, value)
                      }}
                    />
                  }
                  isCollapsed={false}
                  title={"Support information"}
                />
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
                    this._onButtonClick(e);
                  }}
                >
                  Create Ticket
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

  private _onMultiSelectDropdown = (
    propertyName: string,
    option: any,
    index?: number
  ) => {
    if (option.selected) {
      const newState = update(this.state, {
        [propertyName]: { $push: [option.key] }
      });
      this.setState(newState);
    } else {
      const newState = update(this.state, {
        [propertyName]: { $splice: [[index, 1]] }
      });
      this.setState(newState);
    }
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
  //#endregion

  private _onButtonClick(event: any) {
    event.preventDefault();
    // check for form validation, go ahead only if form is valid

    const newDialogState = update(this.state.dialogBlocking, {
      showConfirmDialog: { $set: false },
      showProgressDialog: { $set: true },
      showProgress: { $set: true },
      progressDialogText: { $set: "saving your ticket..." },
      dialogTitle: { $set: "Creating New Ticket" },
      error: { $set: null }
    });
    this.setState({
      dialogBlocking: newDialogState
    });
    createTicket(this.state).then((res: any) => {
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
