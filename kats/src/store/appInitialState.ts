import IStore from './IStore'


export const appInitialState: IStore =
{
    user: 
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
        },
    ticket: {
        isInitialised: false,
        currentTicket: {
            id: null,
            submitter: {
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
            },
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
        }
    },
    engagementType: {
        isInitialised: false,
        isFetched:false,
        name: "",
        items: [
            {
                id: null,
                title: ""
            }
        ]
    },
    accountingFramework: {
        isInitialised: false,
        isFetched:false,
        name: "",
        items: [
            {
                id: null,
                title: ""
            }
        ]
    },
    auditingStandard: {
        isInitialised: false,
        isFetched:false,
        name: "",
        items: [
            {
                id: null,
                title: ""
            }
        ]
    },
    category:{
        isInitialised: false,
        isFetched:false,
        name: "",
        items: [
            {
                id: null,
                title: ""
            }
        ]
    },
    topic:{
        isInitialised: false,
        isFetched:false,
        name: "",
        items: [
            {
                id: null,
                title: ""
            }
        ]
    },
    ticketType: {
        isInitialised: false,
        isFetched:false,
        name: "",
        items: [
            {
                id: null,
                title: ""
            }
        ]
    },
    status: {
        isInitialised: false,
        isFetched:false,
        name: "",
        items: [
            {
                id: null,
                title: ""
            }
        ]
    },

}

export default appInitialState