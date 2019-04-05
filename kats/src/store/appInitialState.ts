import IStore from './IStore'


export const appInitialState: IStore =
{
    users: [
        {
            isInitialised: false,
            userState: {
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
                memberOf: [],
                office: "",
                officeNumber: null
            }
        }
    ],
    ticket:     {
                id: null,
                submitter: null,
                watcher: [],
                respIndividual: null,
                assignee: null,
                reviewer: null,
                assignedTo: null,
                auditTeam: [],
                engagementName: "",
                engagementChargeCode: null,
                periodEnd: null,
                engagementType: [],
                auditingStandard: [],
                accountingFramework: [],
                category: null,
                topic: [],
                ticketType: null,
                subject: "",
                detailedAnalysis: "",
                priority: "Normal",
                reasonForUrgency: "",
                supportTeam: null,
                status: 1,
                training: "Yes",
                faq: "No",
                labels: [],
                finalConsultation: "",
                conclusion: "",
                addToKb: "Yes",
                comments: [],
                supportTeamComments: []
            },
    engagementType: [
        {
            id: null,
            title: ""
        }],
    accountingFramework: [
        {
            id: null,
            title: ""
        }],
    auditingStandard: [
        {
            id: null,
            title: ""
        }],
    category: [
        {
            id: null,
            title: ""
        }],
    topic: [
        {
            id: null,
            title: ""
        }],
    ticketType: [
        {
            id: null,
            title: ""
        }],
    status: [
        {
            id: null,
            title: ""
        }],

}
    
export default appInitialState