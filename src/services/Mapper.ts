import { ITicketLocalState } from "../models/ITicketState";
import { CONST } from "../utils/const";
import { getUserByID } from "./UserAPI";

export const Ticket_Mapper = (value: ITicketLocalState) => {
  const ticket_Mapper: any = {
    //Support
    [CONST.Lists.Tickets.Columns.Ticket_x0020_Type.Internal_Name]:
      value.Ticket_x0020_Type,
    [CONST.Lists.Tickets.Columns.Training.Internal_Name]: value.Training,
    [CONST.Lists.Tickets.Columns.FAQ.Internal_Name]: value.FAQ,
    [CONST.Lists.Tickets.Columns.Conclusion.Internal_Name]: value.Conclusion,
    [CONST.Lists.Tickets.Columns.Add_x0020_to_x0020_KB.Internal_Name]:
      value.Add_x0020_to_x0020_KB,
    [CONST.Lists.Tickets.Columns.Label.Internal_Name]: value.Label.toString(),

    [CONST.Lists.Tickets.Columns.Title.Internal_Name]: value.Title,
    [CONST.Lists.Tickets.Columns.TicketId.Internal_Name]: value.TicketId,
    [CONST.Lists.Tickets.Columns.Sentinel_x0020_GIS_x0020_ID.Internal_Name]:
      value.Sentinel_x0020_GIS_x0020_ID,
    [CONST.Lists.Tickets.Columns.Engagement_x0020_Name.Internal_Name]:
      value.Engagement_x0020_Name,
    [CONST.Lists.Tickets.Columns.Engagement_x0020_Type
      .Internal_Name]: value.Engagement_x0020_Type.toString(),
    [CONST.Lists.Tickets.Columns.Accounting_x0020_Framework
      .Internal_Name]: value.Accounting_x0020_Framework.toString(),
    [CONST.Lists.Tickets.Columns.Auditing_x0020_Standards
      .Internal_Name]: value.Auditing_x0020_Standards.toString(),
    [CONST.Lists.Tickets.Columns.Support_x0020_Team.Internal_Name]:
      value.Support_x0020_Team,

    [CONST.Lists.Tickets.Columns.Accounting_x0020_Period_x0020_En
      .Internal_Name]: value.Accounting_x0020_Period_x0020_En,
    [CONST.Lists.Tickets.Columns.Engagement_x0020_Charge_x0020_Co
      .Internal_Name]: value.Engagement_x0020_Charge_x0020_Co,

    [CONST.Lists.Tickets.Columns._Category.Internal_Name]: value._Category,
    [CONST.Lists.Tickets.Columns.Topics.Internal_Name]: value.Topics.toString(),
    [CONST.Lists.Tickets.Columns.OData__Status.Internal_Name]:
      value.OData__Status,
    // Multiple line of text Mapper
    [CONST.Lists.Tickets.Columns.Detailed_x0020_Analysis.Internal_Name]:
      value.Detailed_x0020_Analysis,

    // Choice Field Mapper
    [CONST.Lists.Tickets.Columns.IsUrgent.Internal_Name]:
      value.IsUrgent === 1 ? true : false,
    [CONST.Lists.Tickets.Columns.Required_x0020_Consultation.Internal_Name]:
      value.Required_x0020_Consultation,
    // People Picker Mapper
    [CONST.Lists.Tickets.Columns.Submitted_x0020_ById.Internal_Name]:
      value.Submitted_x0020_ById &&
      value.Submitted_x0020_ById.map((user: any) => {
        return user.Id;
      })[0],

    [CONST.Lists.Tickets.Columns.Audit_x0020_Team_x0020_CCId.Internal_Name]: {
      results:
        value.Audit_x0020_Team_x0020_CCId &&
        value.Audit_x0020_Team_x0020_CCId.map((user: any) => {
          return user.Id;
        })
    },

    [CONST.Lists.Tickets.Columns.AssigneeId.Internal_Name]:
      value.AssigneeId &&
      value.AssigneeId.map((user: any) => {
        return user.Id;
      })[0],

    [CONST.Lists.Tickets.Columns.Responsible_x0020_IndividualId.Internal_Name]:
      value.Responsible_x0020_IndividualId &&
      value.Responsible_x0020_IndividualId.map((user: any) => {
        return user.Id;
      })[0],

    [CONST.Lists.Tickets.Columns.WatcherId.Internal_Name]: {
      results:
        value.WatcherId &&
        value.WatcherId.map((user: any) => {
          return user.Id;
        })
    }
  };
  return ticket_Mapper;
};

export const Ticket_Assigner = async (
  ticketResponse: any
): Promise<ITicketLocalState> => {
  let localState: ITicketLocalState;
  let assignerUser: any[] = [];
  localState.Accounting_x0020_Framework =
    ticketResponse[
      CONST.Lists.Tickets.Columns.Accounting_x0020_Framework.Internal_Name
    ] || "";
  localState.TicketId =
    ticketResponse[CONST.Lists.Tickets.Columns.TicketId.Internal_Name] || "";
  const assigner = getUserByID(
    ticketResponse[CONST.Lists.Tickets.Columns.AssigneeId.Internal_Name]
  );
  await assigner.then(userRes => {
    assignerUser.push({
      key: userRes.LoginName,
      primaryText: userRes.Title,
      secondaryText: userRes.Email
    });
  });
  console.log("TCL: localState", localState);
  return localState;
};
