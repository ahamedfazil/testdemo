import { ICurrentTicketState } from '../../models/ITicket';
import { url } from '../../config/pnp.config';
import { IAppProps } from '../../models/IAppProps';

const listName: string = '';

export async function getTicketById(ticketId: number, listName ='Tickets') {
    return fetch(`${url}/_api/web/lists/GetByTitle('${listName}')/Items(${ticketId})`, {
        method: 'GET',
        headers: {
            accept: "application/json;odata=verbose",
        },
    })
        .then((response: any) => {
            return response;
        })
}

export async function addTicket(props: IAppProps) {

    let ticket: ICurrentTicketState = props.store.ticket.currentTicket;

    let data = {};
    data['Title'] = ticket.subject;
    data['Submitted_x0020_ById'] = ticket.submitter.id;
    data['Office'] = ticket.submitter.office;
    data['JobTitle'] = ticket.submitter.title;
    data['Department'] = ticket.submitter.department;
    data['Office_x0020_Number'] = ticket.submitter.officeNumber;
    data['Audit_x0020_Team_x0020_CCId'] = ticket.auditTeam;
    data['Responsible_x0020_IndividualId'] = ticket.respIndividual;
    data['Engagement_x0020_Name'] = ticket.engagementName;
    data['Engagement_x0020_Charge_x0020_Co'] = ticket.engagementChargeCode;
    data['Accounting_x0020_Period_x0020_En'] = ticket.periodEnd;
    data['Auditing_x0020_Standards'] = ticket.auditingStandard;
    data['Accounting_x0020_Framework'] = ticket.accountingFramework;
    data['OData__Category'] = ticket.category;
    data['Support_x0020_Team'] = ticket.supportTeam;
    data['Topic'] = ticket.topic;
    data['Ticket_x0020_Type'] = ticket.ticketType;
    data['Training'] = ticket.training;
    data['FAQ'] = ticket.faq;
    data['Label'] = ticket.labels;
    data['Detailed_x0020_Analysis'] = ticket.detailedAnalysis;
    data['IsUrgent'] = ticket.priority;
    data['Reason_x0020_for_x0020_Urgency'] = ticket.reasonForUrgency;
    data['AssigneeId'] = ticket.assignee;
    data['ReviewerId'] = ticket.reviewer;
    data['WatcherId'] = ticket.watcher;
    data['OData__Status'] = ticket.status;
    data['Conclusion'] = ticket.conclusion;
    data['Add_x0020_to_x0020_KB'] = ticket.addToKb;
    data['TicketId'] = ticket.id;
    data['Engagement_x0020_Type'] = ticket.engagementType;
    data['_metadata'] = ticket._metadata;


    let requestData = JSON.stringify(data);

    //Dispatch ticket upload action
    props.addTicketInProgress(ticket, listName)


    try {
        return fetch(`${url}/_api/web/lists/GetByTitle('${listName}')/Items`, {
            method: 'POST',
            headers: {
                accept: "application/json;odata=verbose",
            },
            body: requestData
        }).then(response => {
            if (response.ok) {
                //Dispatch success action
                props.addTicketSuccess();
            }
        })



    } catch (error) {
        console.log(error);
        //Dispatch error action
        props.addTicketError(error)

    }

}


export default undefined

