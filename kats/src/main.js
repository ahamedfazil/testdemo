"use strict";
exports.__esModule = true;
var constants_1 = require("./constants");
var reducers_1 = require("./store/reducers");
//import { User } from './models/User'
var state = "";
var action = {
    type: constants_1["default"].ADD_SUBMITTER,
    payload: {
        "Full name": "Nigella Lawson",
        "Job Title": "Chef",
        "Department": "Audit",
        "Office Location": "London",
        "Office Number": 868,
        "Mobile Number": 7717719,
        "Other Number": 7242019
    }
};
var nextState = reducers_1.submitter(state, action);
console.log("\n    Initial state: " + state + "\n    action: " + JSON.stringify(action) + "\n    new state: " + JSON.stringify(nextState) + "\n");
