"use strict";
exports.__esModule = true;
var constants_1 = require("../constants");
exports.submitter = function (state, action) {
    if (state === void 0) { state = "Christopher Dan"; }
    return (action.type === constants_1["default"].ADD_SUBMITTER) ? (action.payload) :
        state;
};
