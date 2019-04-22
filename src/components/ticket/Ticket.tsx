import * as React from "react";
import { ITicketProps } from "../../models/ITicketProps";
import { debounce } from "throttle-debounce";
import {
  ITicketLocalState,
  ITicketDictionary,
  IDialogBlocking,
  ITicketForm,
  ITicketCollapse
} from "../../models/ITicketState";
import { initialTicketLocalState } from "../../store/initialState";
import { getTicketDictionary } from "../../services/DictionaryAPI";
import {
  PrimaryButton,
  Spinner,
  SpinnerSize,
  DefaultButton
} from "office-ui-fabric-react";
import { getSpecificArrayFromJSONArray } from "../../utils/Utilities";
import update from "immutability-helper";
import { CONST } from "../../utils/const";
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
import CustomGroup from "../support/CustomGroup";
import { TicketUsers } from "../support/TicketUsers";
import { TicketHeader } from "../support/TicketHeader";
import { TicketInfo } from "../support/TicketInfo";
import { TicketEngagementInfo } from "../support/TicketEngagement";
import { TicketRequestDetail } from "../support/TicketRequestDetail";
import { TicketSupportFields } from "../support/SupportFields";
import Collapsible from "react-collapsible";
import { TicketSubTitle } from "../support/TicketSubTitle";
import { setFormTypeAndID } from "../../services/SiteAPI";
// import { setFormTypeAndID } from "../../services/SiteAPI";

export class Ticket extends React.Component<ITicketProps, ITicketLocalState> {
  constructor(props: ITicketProps) {
    super(props);
    this._onChangeValue = this._onChangeValue.bind(this);
    this._onChangeValue = debounce(300, this._onChangeValue);
    this.state = initialTicketLocalState(this.props.store);
    setFormTypeAndID(this.props);
  }

  async componentDidMount() {
    await getTicketDictionary(this.props);
    //#region Getting Value By ID
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
    //#endregion
  }

  public render(): JSX.Element {
    const siteState: ISiteState = this.props.store.site;
    const formCollapse: ITicketCollapse = this.state.formCollapse;
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
        <TicketHeader isEdit={isEdit} className="header" />

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
              <Collapsible
                trigger={
                  <TicketSubTitle
                    title="Details"
                    isCollapsed={formCollapse.isDetailsCollapse}
                  />
                }
                onClosing={() => {
                  this._onCollapseChange("isDetailsCollapse", true);
                }}
                onOpening={() => {
                  this._onCollapseChange("isDetailsCollapse", false);
                }}
                open={true}
              >
                <TicketRequestDetail
                  submitter={this.state.ticketForm.Submitted_x0020_ById}
                  subject={this.state.ticketForm.Title}
                  detailedAnalysis={
                    this.state.ticketForm.Detailed_x0020_Analysis
                  }
                  priority={this.state.ticketForm.Priority}
                  getTicketRequestValue={(key, value) => {
                    this._onChangeValue(key, value);
                  }}
                />
              </Collapsible>
            </div>
            <div className="ms-Grid-row">
              <Collapsible
                trigger={
                  <TicketSubTitle
                    title="Ticket Information"
                    isCollapsed={formCollapse.isInformationCollapse}
                  />
                }
                onClosing={() => {
                  this._onCollapseChange("isInformationCollapse", true);
                }}
                onOpening={() => {
                  this._onCollapseChange("isInformationCollapse", false);
                }}
                open={true}
              >
                <TicketInfo
                  ticketId={this.state.ticketForm.TicketId}
                  status={this.state.ticketForm.OData__Status}
                  ticketDictionary={this.props.store.ticket.ticketDictionary}
                  category={this.state.ticketForm.OData__Category}
                  categoryTitleOptions={categoryTitleOptions}
                  supportTeam={this.state.ticketForm.Support_x0020_Team}
                  requiredConsultation={
                    this.state.ticketForm.Required_x0020_Consultation
                  }
                  topics={this.state.ticketForm.Topics}
                  topicsOptions={categoryTopicsOptions}
                  accountingFrameworks={
                    this.state.ticketForm.Accounting_x0020_Framework
                  }
                  auditingStandards={
                    this.state.ticketForm.Auditing_x0020_Standards
                  }
                  getTicketInfoValue={(key, value, isCategory) => {
                    if (!isCategory) {
                      this._onChangeValue(key, value);
                    } else {
                      const newState = update(this.state, {
                        ticketForm: {
                          [key]: { $set: value }
                        }
                      });
                      this.setState(newState);
                      this._settingSupportGroup(value);
                    }
                  }}
                  getTicketInfoValueMulti={(key, option, index) =>
                    this._onMultiSelectDropdown(key, option, index)
                  }
                />
              </Collapsible>
            </div>
            <div className="ms-Grid-row">
              <Collapsible
                trigger={
                  <TicketSubTitle
                    title="Engagement Information"
                    isCollapsed={formCollapse.isEngaCollapse}
                  />
                }
                onClosing={() => {
                  this._onCollapseChange("isEngaCollapse", true);
                }}
                onOpening={() => {
                  this._onCollapseChange("isEngaCollapse", false);
                }}
                open={true}
              >
                <TicketEngagementInfo
                  ticketDictionary={this.props.store.ticket.ticketDictionary}
                  engagementName={this.state.ticketForm.Engagement_x0020_Name}
                  sentinelGisId={
                    this.state.ticketForm.Sentinel_x0020_GIS_x0020_ID
                  }
                  engagementType={this.state.ticketForm.Engagement_x0020_Type}
                  periodEnd={
                    this.state.ticketForm.Accounting_x0020_Period_x0020_En
                  }
                  chargeCode={
                    this.state.ticketForm.Engagement_x0020_Charge_x0020_Co
                  }
                  getEngagementInfoValue={(key, value) => {
                    this._onChangeValue(key, value);
                  }}
                  getTicketEngValueMulti={(key, option, index) =>
                    this._onMultiSelectDropdown(key, option, index)
                  }
                />
              </Collapsible>
            </div>
            <div className="ms-Grid-row">
              <Collapsible
                trigger={
                  <TicketSubTitle
                    title="People"
                    isCollapsed={formCollapse.isPeopleCollapse}
                  />
                }
                onClosing={() => {
                  this._onCollapseChange("isPeopleCollapse", true);
                }}
                onOpening={() => {
                  this._onCollapseChange("isPeopleCollapse", false);
                }}
                open={true}
              >
                <TicketUsers
                  assigneeId={this.state.ticketForm.AssigneeId}
                  engagementRiId={
                    this.state.ticketForm.Responsible_x0020_IndividualId
                  }
                  auditTeam={this.state.ticketForm.Audit_x0020_Team_x0020_CCId}
                  watchers={this.state.ticketForm.WatcherId}
                  getUserValue={(key, value) => {
                    this._onChangeValue(key, value);
                  }}
                />
              </Collapsible>
            </div>
            {userState.currentUser.isSupportUser && (
              <div className="ms-Grid-row">
                <Collapsible
                  trigger={
                    <TicketSubTitle
                      title="Support Information"
                      isCollapsed={formCollapse.isSupportCollapse}
                    />
                  }
                  onClosing={() => {
                    this._onCollapseChange("isSupportCollapse", true);
                  }}
                  onOpening={() => {
                    this._onCollapseChange("isSupportCollapse", false);
                  }}
                  open={true}
                >
                  <TicketSupportFields
                    ticketDictionary={this.props.store.ticket.ticketDictionary}
                    conclusion={this.state.ticketForm.Conclusion}
                    ticketType={this.state.ticketForm.Ticket_x0020_Type}
                    training={this.state.ticketForm.Training}
                    addToKb={this.state.ticketForm.Add_x0020_to_x0020_KB}
                    faq={this.state.ticketForm.FAQ}
                    labels={this.state.ticketForm.Label}
                    getSupportFieldValues={(key, value) => {
                      this._onChangeValue(key, value);
                    }}
                  />
                </Collapsible>
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

  private _onCollapseChange(key: string, isCollapsed: boolean) {
    const newState = update(this.state, {
      formCollapse: {
        [key]: { $set: isCollapsed }
      }
    });
    this.setState(newState);
  }

  private _onChangeValue(key: string, value: any) {
    const newState = update(this.state, {
      ticketForm: {
        [key]: { $set: value }
      }
    });
    this.setState(newState);
  }

  private _settingSupportGroup(category: string) {
    const supportTeam = this.props.store.ticket.ticketDictionary.category.filter(
      cat => cat.Title === category
    )[0];
    if (supportTeam) {
      this._onChangeValue(
        CONST.Lists.Tickets.Columns.Support_x0020_Team.Internal_Name,
        supportTeam.Support_x0020_Team
          ? supportTeam.Support_x0020_Team.Name
          : ""
      );
    } else {
      this._onChangeValue(
        CONST.Lists.Tickets.Columns.Support_x0020_Team.Internal_Name,
        ""
      );
    }
  }

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
