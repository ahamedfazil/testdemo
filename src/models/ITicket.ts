import { IUserState } from "./IUser";

export interface ITicketState {
  isInitialised: boolean;
  error?: any;
  currentTicket: ICurrentTicketState;
}

export interface ICurrentTicketState {
  id: number | null;
  submitter: IUserState;
  auditTeam: number[];
  respIndividual: number;
  engagementName: string;
  engagementChargeCode: number;
  periodEnd: Date;
  engagementType: number[];
  auditingStandard: number[];
  accountingFramework: number[];
  category: number;
  topic: number[];
  ticketType: number;
  subject: string;
  detailedAnalysis: string;
  priority: "Normal" | "Urgent";
  reasonForUrgency: string;
  watcher: number[];
  status: number;
  comments: number[];
  labels: number[];
  supportTeam: number;
  training: "Yes" | "No";
  faq: "Yes" | "No";
  assignee: number;
  assignedTo: number;
  reviewer: number;
  supportTeamComments: number[];
  finalConsultation: string;
  conclusion: string;
  addToKb: "Yes" | "No";
  _metadata?: { type: "SP.Data.TicketsListItem" };
}
