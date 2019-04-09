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
            id: undefined,
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
        isFetched: false,
        name: "",
        results: [
                {
                    id: null,
                    title: ""
                }
            ]
            },
    accountingFramework: {
        isInitialised: false,
        isFetched: false,
        name: "",
        results: [
                {
                    id: null,
                    title: ""
                }
            ]
            },
    auditingStandard: {
        isInitialised: false,
        isFetched: false,
        name: "",
        results: [
                {
                    id: null,
                    title: ""
                }
            ]
            },
    category: {
        isInitialised: false,
        isFetched: false,
        name: "",
        results: [
                {
                    id: null,
                    title: ""
                }
            ]
            },
    topic: {
        isInitialised: false,
        isFetched: false,
        name: "",
        results: [
                {
                    id: 1,
                    title: "Unassigned"
                },
                {
                    id: 2,
                    title: "Awaiting Input"
                }
            ]
            },
    ticketType: {
        isInitialised: false,
        isFetched: false,
        name: "",
        results: [
                {
                    id: null,
                    title: ""
                }
            ]
            },
    status: {
        isInitialised: false,
        isFetched: false,
        name: "",
        results: [
                {
                    id: null,
                    title: ""
                }
            ]
            },

}

export default appInitialState