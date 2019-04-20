import { CONST } from "../utils/const";
import { getUserByID } from "./UserAPI";
import { ITicketForm } from "../models/ITicketState";
import { getArrayFromString } from "../utils/Utilities";

export const Ticket_Assigner = async (
  ticketResponse: any,
  localTicket: ITicketForm
): Promise<ITicketForm> => {
  try {
    //#region User Definition
    let submitterID: any = null,
      submitterUser: any[] = [],
      auditTeamIDs: [] = [],
      auditTeamUsers: any[] = [],
      assignerID: any = null,
      assignerUser: any[] = [],
      responsibleID: any = null,
      responsibleUser: any[] = [],
      watcherIDs: any[] = [],
      watcherUsers: any[] = [];
    //#endregion

    //#region Support
    localTicket.Ticket_x0020_Type =
      ticketResponse[
        CONST.Lists.Tickets.Columns.Ticket_x0020_Type.Internal_Name
      ] || "";
    localTicket.Title =
      ticketResponse[CONST.Lists.Tickets.Columns.Title.Internal_Name] || "";
    localTicket.TicketId =
      ticketResponse[CONST.Lists.Tickets.Columns.TicketId.Internal_Name] || "";
    localTicket.Engagement_x0020_Name =
      ticketResponse[
        CONST.Lists.Tickets.Columns.Engagement_x0020_Name.Internal_Name
      ] || "";
    localTicket.Support_x0020_Team =
      ticketResponse[
        CONST.Lists.Tickets.Columns.Support_x0020_Team.Internal_Name
      ] || "";
    localTicket.Accounting_x0020_Period_x0020_En =
      ticketResponse[
        CONST.Lists.Tickets.Columns.Accounting_x0020_Period_x0020_En
          .Internal_Name
      ] || "";
    localTicket.Engagement_x0020_Charge_x0020_Co =
      ticketResponse[
        CONST.Lists.Tickets.Columns.Engagement_x0020_Charge_x0020_Co
          .Internal_Name
      ] || "";

    //#endregion

    //#region Multiple line of text Assigner
    localTicket.Detailed_x0020_Analysis =
      ticketResponse[
        CONST.Lists.Tickets.Columns.Detailed_x0020_Analysis.Internal_Name
      ] || "";
    localTicket.Conclusion =
      ticketResponse[CONST.Lists.Tickets.Columns.Conclusion.Internal_Name] ||
      "";
    localTicket.Topics = getArrayFromString(
      ticketResponse[CONST.Lists.Tickets.Columns.Topics.Internal_Name]
    );
    //#endregion

    //#region Checkbox, Radiobutton Field Assigner
    localTicket.Sentinel_x0020_GIS_x0020_ID =
      ticketResponse[
        CONST.Lists.Tickets.Columns.Sentinel_x0020_GIS_x0020_ID.Internal_Name
      ].toString() || "";
    localTicket.Label = getArrayFromString(
      ticketResponse[CONST.Lists.Tickets.Columns.Label.Internal_Name]
    );
    localTicket.Engagement_x0020_Type = getArrayFromString(
      ticketResponse[
        CONST.Lists.Tickets.Columns.Engagement_x0020_Type.Internal_Name
      ]
    );
    localTicket.Accounting_x0020_Framework = getArrayFromString(
      ticketResponse[
        CONST.Lists.Tickets.Columns.Accounting_x0020_Framework.Internal_Name
      ]
    );
    localTicket.Auditing_x0020_Standards = getArrayFromString(
      ticketResponse[
        CONST.Lists.Tickets.Columns.Auditing_x0020_Standards.Internal_Name
      ]
    );
    localTicket.OData__Category =
      ticketResponse[
        CONST.Lists.Tickets.Columns.OData__Category.Internal_Name
      ] || "";
    localTicket.Required_x0020_Consultation =
      ticketResponse[
        CONST.Lists.Tickets.Columns.Required_x0020_Consultation.Internal_Name
      ] || false;
    localTicket.FAQ =
      ticketResponse[CONST.Lists.Tickets.Columns.FAQ.Internal_Name] || false;
    localTicket.Training =
      ticketResponse[CONST.Lists.Tickets.Columns.Training.Internal_Name] ||
      false;
    localTicket.Add_x0020_to_x0020_KB =
      ticketResponse[
        CONST.Lists.Tickets.Columns.Add_x0020_to_x0020_KB.Internal_Name
      ] || false;
    localTicket.OData__Status =
      ticketResponse[CONST.Lists.Tickets.Columns.OData__Status.Internal_Name] ||
      "";
    localTicket.Priority = ticketResponse[
      CONST.Lists.Tickets.Columns.Priority.Internal_Name
    ] || "";
    //#endregion

    //#region People Picker Assigner
    submitterID =
      ticketResponse[
        CONST.Lists.Tickets.Columns.Submitted_x0020_ById.Internal_Name
      ];
    auditTeamIDs =
      ticketResponse[
        CONST.Lists.Tickets.Columns.Audit_x0020_Team_x0020_CCId.Internal_Name
      ].results || [];
    assignerID =
      ticketResponse[CONST.Lists.Tickets.Columns.AssigneeId.Internal_Name];
    responsibleID =
      ticketResponse[
        CONST.Lists.Tickets.Columns.Responsible_x0020_IndividualId.Internal_Name
      ];
    watcherIDs =
      ticketResponse[CONST.Lists.Tickets.Columns.WatcherId.Internal_Name]
        .results || [];
    //#endregion

    //#region People Picker Resolver

    localTicket.Submitted_x0020_ById = await PeoplePickerForAssigner(
      submitterID,
      submitterUser
    );
    localTicket.Audit_x0020_Team_x0020_CCId = await PeoplePickerForMultiAssigner(
      auditTeamIDs,
      auditTeamUsers
    );
    localTicket.AssigneeId = await PeoplePickerForAssigner(
      assignerID,
      assignerUser
    );
    localTicket.Responsible_x0020_IndividualId = await PeoplePickerForAssigner(
      responsibleID,
      responsibleUser
    );
    localTicket.WatcherId = await PeoplePickerForMultiAssigner(
      watcherIDs,
      watcherUsers
    );
    //#endregion

    localTicket.isFetched = true;
    return localTicket;
  } catch (assignerError) {
    localTicket.isFetched = false;
    localTicket.error = assignerError;
    return localTicket;
  }
};

const PeoplePickerForAssigner = async (userID: any, userVal: any[]) => {
  if (userID) {
    const assignerResponse = await getUserByID(userID);
    userVal.push({
      Id: userID,
      key: assignerResponse.LoginName,
      primaryText: assignerResponse.Title,
      secondaryText: assignerResponse.Email
    });
    return userVal;
  }
};

const PeoplePickerForMultiAssigner = async (userIDs: any[], userVal: any[]) => {
  userIDs.map(async userID => {
    if (userID) {
      const assignerResponse = await getUserByID(userID);
      userVal.push({
        Id: userID,
        key: assignerResponse.LoginName,
        primaryText: assignerResponse.Title,
        secondaryText: assignerResponse.Email
      });
    }
  });
  return userVal;
};
