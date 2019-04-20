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

export class Ticket extends React.Component<ITicketProps, ITicketLocalState> {
  constructor(props: ITicketProps) {
    super(props);
    this._onTextChange = this._onTextChange.bind(this);
    this.changedValue = debounce(300, this.changedValue);
    this.state = initialTicketLocalState(this.props.store);
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
    const formState: ITicketForm = this.state.ticketForm;
    const isEdit: boolean = siteState.siteInfo.isEditForm;
    const userState: IUserState = this.props.store.user;
    const ticketDictionary: ITicketDictionary = this.props.store.ticket
      .ticketDictionary;
    const dialogBlocking: IDialogBlocking = this.state.dialogBlocking;
    if (ticketDictionary.isFetched) {
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
              <TicketRequestDetail
                submitter={this.state.ticketForm.Submitted_x0020_ById}
                subject={this.state.ticketForm.Title}
                detailedAnalysis={this.state.ticketForm.Detailed_x0020_Analysis}
                priority={this.state.ticketForm.Priority}
                getTicketRequestValue={(key, value) => {
                  this._onTextChange(key, value);
                }}
              />
              {/* <CustomGroup
                groupCollapse={null}
                item={
                  <TicketRequestDetail
                    submitter={this.state.ticketForm.Submitted_x0020_ById}
                    subject={this.state.ticketForm.Title}
                    detailedAnalysis={this.state.ticketForm.Detailed_x0020_Analysis}
                    priority={this.state.ticketForm.Priority}
                    getTicketRequestValue={(key, value) => {
                      this._onTextChange(key, value);
                    }}
                  />
                }
                isCollapsed={false}
                title={"Detail"}
              />*/}
            </div>
            <div className="ms-Grid-row">
              <CustomGroup
                groupCollapse={null}
                item={
                  <TicketInfo
                    ticketId={this.state.ticketForm.TicketId}
                    status={this.state.ticketForm.OData__Status}
                    ticketDictionary={this.props.store.ticket.ticketDictionary}
                    category={this.state.ticketForm.OData__Category}
                    supportTeam={this.state.ticketForm.Support_x0020_Team}
                    requiredConsultation={
                      this.state.ticketForm.Required_x0020_Consultation
                    }
                    topics={this.state.ticketForm.Topics}
                    accountingFrameworks={
                      this.state.ticketForm.Accounting_x0020_Framework
                    }
                    auditingStandards={
                      this.state.ticketForm.Auditing_x0020_Standards
                    }
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
                    assigneeId={this.state.ticketForm.AssigneeId}
                    engagementRiId={
                      this.state.ticketForm.Responsible_x0020_IndividualId
                    }
                    auditTeam={
                      this.state.ticketForm.Audit_x0020_Team_x0020_CCId
                    }
                    watchers={this.state.ticketForm.WatcherId}
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
                      ticketDictionary={
                        this.props.store.ticket.ticketDictionary
                      }
                      conclusion={this.state.ticketForm.Conclusion}
                      ticketType={this.state.ticketForm.Ticket_x0020_Type}
                      training={this.state.ticketForm.Training}
                      addToKb={this.state.ticketForm.Add_x0020_to_x0020_KB}
                      faq={this.state.ticketForm.FAQ}
                      labels={this.state.ticketForm.Label}
                      getSupportFieldValues={(key, value) => {
                        this.changedValue(key, value);
                        this._onCheckboxChange(event, value);
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
  private _onTextChange(key: string, value: any) {
    this.changedValue(key, value);
  }

  private _onCheckboxChange = (event: any, isChecked: boolean) => {
    this.changedValue(event.target.name, isChecked);
  };

  private changedValue(key: string, value: any) {
    const newState = update(this.state, {
      ticketForm: {
        [key]: { $set: value }
      }
    });
    this.setState(newState);
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
