// const index = {
//     "visibilityFilter": "SHOW_SUPPORT_FIELDS",
//     "users": [
//         {
//             "isInitialised": false,
//             "userState": {
//                 "isFetched": false,
//                 "isSupportUser": false,
//                 "isUser": false,
//                 "id":null,
//                 "name": "",
//                 "email": "",
//                 "firstName": "",
//                 "lastName": "",
//                 "title": "",
//                 "loginName": "",
//                 "department": "",
//                 "office": "",
//                 "officeNumber": null
//             }
//         }
//     ],
//     "allTickets": [
//         {
//             "id": null,
//             "submitter": null,
//             "watcher": [],
//             "respIndividual": null,
//             "assignee": null,
//             "reviewer": null,
//             "assignedTo": null,
//             "auditTeam": [],
//             "engagementName": "",
//             "engagementChargeCode": null,
//             "periodEnd": null,
//             "engagementType": [],
//             "auditingStandard": [],
//             "accountingFramework": [],
//             "category": null,
//             "topic": [],
//             "ticketType": null,
//             "subject": "",
//             "detailedAnalysis": "",
//             "priority": "Normal",
//             "reasonForUrgency": "",
//             "supportTeam": null,
//             "status": null,
//             "training": "",
//             "faq": "",
//             "labels": [],
//             "finalConsultation": "",
//             "conclusion": "",
//             "addToKb": "",
//             "comments": [],
//             "supportTeamComments": []
//         }
//     ],
//     "comments": {
//         "2": {
//             "id": 2,
//             "content": "Sorry you were asked to look at this.  The team had not consulted me first.",
//             "owner": 10
//         },
//         "15": {
//             "Id": 15,
//             "content": "​Discussed with the team. Letter of support to be obtained and basis of preparation note",
//             "owner": 10
//         }
//     },
//     "supportTeamComments": [
//         {
//             "Id": 1,
//             "content": "This ticket should be shared out as a KB, could prove useful?",
//             "owner": 5
//         },
//         {
//             "id": 15,
//             "content": "​Discussed with the team. Letter of support to be obtained and basis of preparation note",
//             "owner": 6
//         }
//     ],
//     "engagementTypes": [
//         {
//             "Id": 1,
//             "Title": "EU PIE"
//         },
//         {
//             "Id": 2,
//             "Title": "AQR"
//         },
//         {
//             "Id": 3,
//             "Title": "Significant Other"
//         }
//     ],
//     "auditingStandards": [
//         {
//             "Id": 1,
//             "Title": "ISRE (UK&I)"
//         },
//         {
//             "Id": 2,
//             "Title": "ISAE 3000"
//         }
//     ],
//     "accountingFrameworks": [
//         {
//             "Id": 1,
//             "Title": "EU IFRS"
//         },
//         {
//             "Id": 2,
//             "Title": "IFRS"
//         },
//         {
//             "Id": 3,
//             "Title": "FRS101"
//         }
//     ],
//     "category": [
//         {
//             "Id": 1,
//             "Title": "Materiality"
//         },
//         {
//             "Id": 3,
//             "Title": "Group audit file structure"
//         }
//     ],
//     "topic": [
//         {
//             "Id": 1,
//             "Title": "Financial instruments"
//         },
//         {
//             "Id": 2,
//             "Title": "Cash flow statement"
//         },
//         {
//             "Id": 3,
//             "Title": "Foreign currency"
//         }
//     ],
//     "ticketType": {
//         "Id": 1,
//         "Title": "General Query"
//     },
//     "status": {
//         "Id": 1,
//         "Title": "Unassigned"
//     },
//     "supportTeam": {
//         "Id": 5,
//         "Title": "DPP Accounting & Reporting"
//     },
//     "labelNames": {
//         "fetching": false,
//         "suggestions": [
//             "Subsequent events",
//             "Substantive sampling",
//             "Substantive testing"
//         ]
//     },
//     "errors": [
//         "Server not found"
//     ]
// };

// const requestState = {
//     "visibilityFilter": "SHOW_ALL",
//     "submitter": {
//         "fullName": "Neil Manning",
//         "jobTitle": "Manager",
//         "department": "NM Audit Manchester 2",
//         "officeLocation": "Manchester",
//         "officeNumber": 442076948910,
//         "mobileNumber": 7717719
//     },
//     "auditTeamCc": [
//         {
//             "id": 5,
//             "name": "John Doe"
//         },
//         {
//             "id": 19,
//             "name": "Lewis Blackwell"
//         },
//         {
//             "id": 5,
//             "name": "Martina Hinges"
//         }
//     ],
//     "respIndividual": {
//         "id": 100,
//         "name": "Tracey Newman"
//     },
//     "engagementName": "Hartshead Square Developments Ltd ",
//     "engagementChargeCode": 2551346,
//     "periodEnd": "31/03/2019",
//     "engagementType": [
//         {
//             "id": 1,
//             "value": "EU PIE"
//         },
//         {
//             "id": 2,
//             "value": "AQR"
//         },
//         {
//             "id": 3,
//             "value": "Significant Other"
//         }
//     ],
//     "auditingStandards": {
//         "id": 100,
//         "value": "ISRE (UK&I)"
//     },
//     "accountingFramework": [
//         {
//             "id": 1,
//             "value": "EU IFRS"
//         },
//         {
//             "id": 2,
//             "value": "IFRS"
//         },
//         {
//             "id": 3,
//             "value": "FRS101"
//         }
//     ],
//     "category": {
//         "id": 1,
//         "value": "Materiality"
//     },
//     "topic": [
//         {
//             "id": 1,
//             "value": "Financial instruments"
//         },
//         {
//             "id": 2,
//             "value": "Cash flow statement"
//         },
//         {
//             "id": 3,
//             "value": "Foreign currency"
//         }
//     ],
//     "ticketType": {
//         "id": 1,
//         "value": "General Queryy"
//     },
//     "subject": "Approval needed for Equinox Employee Benefit Trust Limited",
//     "detailedAnalysis": "I have a group reporting under UK GAAP (top company Hartshead Square Developments Ltd). There are no SEC requirements and the charge code is 2494423. They are involved in investment property so properties clearly need to be carried at market value.",
//     "isUrgent": true,
//     "reasonForUrgency": "I need it done ASAP",
//     "assignedTo": "",
//     "watcher": [
//         {
//             "id": 13,
//             "name": "Christopher Martin"
//         },
//         {
//             "id": 25,
//             "name": "Jonathan Brown"
//         }
//     ],
//     "allComments": [
//         {
//             "id": 285,
//             "content": "Sorry you were asked to look at this.  The team had not consulted me first.",
//             "owner": "Greg McIntosh",
//             "date": "14/12/2018",
//             "isInternalOnly":false
            
//         },
//         {
//             "id": 288,
//             "content": "​Discussed with the team. Letter of support to be obtained and basis of preparation note",
//             "owner": "Philip Johnstone",
//             "date": "14/12/2018",
//             "isInternalOnly":false
//         }
//     ],
//     "status": {
//         "id": 1,
//         "value": "Unassigned"
//     },
//     "errors": [
//         "Server not found"
//     ]
// };

// const ticketState = {
//     "visibilityFilter": "SHOW_ALL",
//     "supportTeamAllocated": {
//         "id": 5,
//         "name": "DPP Accounting & Reporting"
//     },
//     "training": false,
//     "faq": false,
//     "labels": {
//         "fetching":false,
//         "suggestions": ["Subsequent events", "Substantive sampling", "Substantive testing"]
//     },
//     "assignee": {
//         "id": 100,
//         "name": "Loretta Newman"
//     },
//     "reviewer": {
//         "id": 100,
//         "name": "Barbara Newman"
//     },
//     "supportTeamComments": [
//         {
//             "id": 285,
//             "content": "Sorry you were asked to look at this.  The team had not consulted me first.",
//             "owner": "Greg McIntosh",
//             "date": "14/12/2018",
//             "isInternalOnly":true
//         },
//         {
//             "id": 288,
//             "content": "​Discussed with the team. Letter of support to be obtained and basis of preparation note",
//             "owner": "Philip Johnstone",
//             "date": "14/12/2018",
//             "isInternalOnly":true
//         }
//     ],
//     "finalConsultation": "Lorem ipsum...",
//     "conclusion": "Lorem ipsum",
//     "addToKb": true
// };