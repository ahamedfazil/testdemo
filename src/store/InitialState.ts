import IStore from "./IStore";
import { ITicketLocalState } from "../models/ITicketState";
import { onFormatDate } from "../utils/Utilities";

export const initialState: IStore = {
  user: {
    isinitialised: false,
    currentUser: {
      isFetched: false,
      isSupportUser: false,
      isUser: false,
      id: null,
      name: "",
      email: "",
      firstName: "",
      lastName: "",
      title: "",
      loginName: "",
      accountName: "",
      department: "",
      managerId: "",
      memberOf: [],
      office: "",
      officeNumber: null
    }
  },
  ticket: {
    isinitialised: false,
    isRequestForm: false,
    error: null,
    ticketDictionary: {
      isFetched: false,
      engagementType: [],
      accountingFramework: [],
      auditingStandard: [],
      category: [],
      topic: [],
      ticketType: [],
      status: [],
      sentinelGisId: [],
      labels: []
    },
    ticketData: null
  }
};

export const initialTicketLocalState = (store: IStore): ITicketLocalState => {
  const initialState: ITicketLocalState = {
    dialogBlocking: {
      showConfirmDialog: false,
      showProgressDialog: false,
      showProgress: false,
      progressDialogText: "",
      dialogTitle: "",
      error: null
    },
    Title: "",
    OData__ModerationComments: "",
    Created: onFormatDate(new Date()),
    File_x0020_Type: "",
    JobTitle: "",
    Office: "",
    ol_Department: "",
    CellPhone: "",
    Office_x0020_Number: "",
    Audit_x0020_Team_x0020_CCId: [],
    Responsible_x0020_IndividualId: [],
    Engagement_x0020_Name: "",
    Engagement_x0020_Charge_x0020_Co: "",
    Accounting_x0020_Period_x0020_En: null,
    Auditing_x0020_Standards: [],
    Accounting_x0020_Framework: [],
    _Category: "",
    Support_x0020_Team: "",
    Ticket_x0020_Type: "",
    Training: false,
    FAQ: false,
    Label: [],
    Detailed_x0020_Analysis: "",
    IsUrgent: "",
    Reason_x0020_for_x0020_Urgency: "",
    AssigneeId: [
      {
        key: store.user.currentUser.accountName,
        primaryText: store.user.currentUser.name,
        secondaryText: store.user.currentUser.email,
        Id: store.user.currentUser.id
      }
    ],
    ReviewerId: null,
    WatcherId: [],
    OData__Status: "",
    Conclusion: "",
    Add_x0020_to_x0020_KB: false,
    TicketId: "",
    Engagement_x0020_Type: [],
    Sentinel_x0020_GIS_x0020_ID: null,
    Required_x0020_Consultation: true,
    Priority: "",
    Topics: [],
    Submitted_x0020_ById: [
      {
        key: store.user.currentUser.accountName,
        primaryText: store.user.currentUser.name,
        secondaryText: store.user.currentUser.email,
        Id: store.user.currentUser.id
      }
    ]
  };
  return initialState;
};
