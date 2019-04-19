export interface ITicketState {
  isinitialised: boolean;
  isRequestForm: boolean;
  error: any;
  ticketDictionary: ITicketDictionary;
  ticketData: any;
}

export interface ITicketDictionary {
  isFetched: boolean;
  engagementType: any[];
  accountingFramework: any[];
  auditingStandard: any[];
  category: ITicketCategory[];
  topic: any[];
  ticketType: any[];
  status: any[];
  sentinelGisId: any[];
  labels: any[];
}

export interface ITicketCategory {
  Title: string;
  Topic: string;
  Support_x0020_Team: any;
}

export interface IDialogBlocking {
  showConfirmDialog: boolean;
  showProgressDialog: boolean;
  showProgress: boolean;
  progressDialogText: string;
  dialogTitle: string;
  error: any;
  getDialogResponse?: (response: boolean) => void;
}

export interface ITicketLocalState {
  dialogBlocking: IDialogBlocking;
  Title: string;
  OData__ModerationComments: string;
  File_x0020_Type: string;
  Submitted_x0020_ById: any[];
  JobTitle: string;
  Office: string;
  ol_Department: string;
  CellPhone: string;
  Office_x0020_Number: string;
  Audit_x0020_Team_x0020_CCId: any[];
  Responsible_x0020_IndividualId: any[];
  Engagement_x0020_Name: string;
  Engagement_x0020_Charge_x0020_Co: string;
  Accounting_x0020_Period_x0020_En: string;
  Auditing_x0020_Standards: string[];
  Accounting_x0020_Framework: string[];
  Created: string;
  OData__Category: string;
  Support_x0020_Team: string;
  Ticket_x0020_Type: string;
  Training: boolean;
  FAQ: boolean;
  Label: string[];
  Detailed_x0020_Analysis: string;
  IsUrgent: any;
  Reason_x0020_for_x0020_Urgency: string;
  AssigneeId: any[];
  ReviewerId: number;
  WatcherId: any[];
  OData__Status: string;
  Conclusion: string;
  Add_x0020_to_x0020_KB: boolean;
  TicketId: string;
  Engagement_x0020_Type: string[];
  Sentinel_x0020_GIS_x0020_ID: number;
  Required_x0020_Consultation: boolean;
  Priority: string;
  Topics: string[];
}
