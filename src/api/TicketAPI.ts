import { ICurrentTicketState } from "../models/ITicket";
import { IAppProps } from "../models/IAppProps";

const listName: string = "";

export async function getTicketById(ticketId: number, listName = "Tickets") {
  return fetch(
    `${null}/_api/web/lists/GetByTitle('${listName}')/Items(${ticketId})`,
    {
      method: "GET",
      headers: {
        accept: "application/json;odata=verbose"
      }
    }
  ).then((response: any) => {
    return response;
  });
}

export async function addTicket(props: IAppProps) {
  let ticket: ICurrentTicketState = props.store.ticket.currentTicket;
  let listName = "Tickets";
  let data = JSON.stringify({
    __metadata: { type: `"SP.Data. + ${listName} + ListItem"` },
    Title: ticket.subject,
    Submitted_x0020_ById: ticket.submitter.id,
    Office: ticket.submitter.office,
    JobTitle: ticket.submitter.title,
    Department: ticket.submitter.department,
    Office_x0020_Number: ticket.submitter.officeNumber,
    Audit_x0020_Team_x0020_CCId: ticket.auditTeam,
    Responsible_x0020_IndividualId: ticket.respIndividual,
    Engagement_x0020_Name: ticket.engagementName,
    Engagement_x0020_Charge_x0020_Co: ticket.engagementChargeCode,
    Accounting_x0020_Period_x0020_En: ticket.periodEnd,
    Auditing_x0020_Standards: ticket.auditingStandard,
    Accounting_x0020_Framework: ticket.accountingFramework,
    OData__Category: ticket.category,
    Support_x0020_Team: ticket.supportTeam,
    Topic: ticket.topic,
    Ticket_x0020_Type: ticket.ticketType,
    Training: ticket.training,
    FAQ: ticket.faq,
    Label: ticket.labels,
    Detailed_x0020_Analysis: ticket.detailedAnalysis,
    IsUrgent: ticket.priority,
    Reason_x0020_for_x0020_Urgency: ticket.reasonForUrgency,
    AssigneeId: ticket.assignee,
    ReviewerId: ticket.reviewer,
    WatcherId: ticket.watcher,
    OData__Status: ticket.status,
    Conclusion: ticket.conclusion,
    Add_x0020_to_x0020_KB: ticket.addToKb,
    TicketId: ticket.id,
    Engagement_x0020_Type: ticket.engagementType
  });

  //Dispatch ticket upload action
  props.addTicketInProgress(ticket, listName);

  try {
    return fetch(`${null}/_api/web/lists/GetByTitle('${listName}')/Items`, {
      method: "POST",
      headers: {
        accept: "application/json;odata=verbose"
      },
      body: data
    }).then(response => {
      if (response.ok) {
        //Dispatch success action
        props.addTicketSuccess();
      }
    });
  } catch (error) {
    console.log(error);
    //Dispatch error action
    props.addTicketError(error);
  }
}
