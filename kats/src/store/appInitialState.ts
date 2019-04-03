import IStore from './IStore'


export const appInitialState:IStore = 
{
    users: [
        {
            isInitialised:false,
        userState:{
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
            department: "",
            memberOf:[],
            office: "",
            officeNumber: null}
        }
    ],
    // allTickets: [
    //     {
    //         id: null,
    //         submitter: null,
    //         watcher: [],
    //         respIndividual: null,
    //         assignee: null,
    //         reviewer: null,
    //         assignedTo: null,
    //         auditTeam: [],
    //         engagementName: "",
    //         engagementChargeCode: null,
    //         periodEnd: null,
    //         engagementType: [],
    //         auditingStandard: [],
    //         accountingFramework: [],
    //         category: null,
    //         topic: [],
    //         ticketType: null,
    //         subject: "",
    //         detailedAnalysis: "",
    //         priority: "Normal",
    //         reasonForUrgency: "",
    //         supportTeam: null,
    //         status: 1,
    //         training: "Yes",
    //         faq: "No",
    //         labels: [],
    //         finalConsultation: "",
    //         conclusion: "",
    //         addToKb: "Yes",
    //         comments: [],
    //         supportTeamComments: []
    //     }
    // ]
}
export default appInitialState