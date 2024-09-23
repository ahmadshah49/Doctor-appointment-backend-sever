"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePhoneNo = void 0;
const validatePhoneNo = function validatePhoneNumber(phoneNo) {
    const phoneRegex = /^\+[1-9]{1}[0-9]{1,14}$/;
    if (phoneRegex.test(phoneNo)) {
        console.log("The phone number is valid.");
        return true;
    }
    else {
        console.log("The phone number is not valid.");
        return false;
    }
};
exports.validatePhoneNo = validatePhoneNo;
