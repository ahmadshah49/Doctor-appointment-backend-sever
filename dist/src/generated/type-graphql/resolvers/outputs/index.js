"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSumAggregate = exports.UserMinAggregate = exports.UserMaxAggregate = exports.UserGroupBy = exports.UserCountAggregate = exports.UserCount = exports.UserAvgAggregate = exports.CreateManyAndReturnUser = exports.CreateManyAndReturnAppointment = exports.AppointmentSumAggregate = exports.AppointmentMinAggregate = exports.AppointmentMaxAggregate = exports.AppointmentGroupBy = exports.AppointmentCountAggregate = exports.AppointmentAvgAggregate = exports.AggregateUser = exports.AggregateAppointment = exports.AffectedRowsOutput = void 0;
var AffectedRowsOutput_1 = require("./AffectedRowsOutput");
Object.defineProperty(exports, "AffectedRowsOutput", { enumerable: true, get: function () { return AffectedRowsOutput_1.AffectedRowsOutput; } });
var AggregateAppointment_1 = require("./AggregateAppointment");
Object.defineProperty(exports, "AggregateAppointment", { enumerable: true, get: function () { return AggregateAppointment_1.AggregateAppointment; } });
var AggregateUser_1 = require("./AggregateUser");
Object.defineProperty(exports, "AggregateUser", { enumerable: true, get: function () { return AggregateUser_1.AggregateUser; } });
var AppointmentAvgAggregate_1 = require("./AppointmentAvgAggregate");
Object.defineProperty(exports, "AppointmentAvgAggregate", { enumerable: true, get: function () { return AppointmentAvgAggregate_1.AppointmentAvgAggregate; } });
var AppointmentCountAggregate_1 = require("./AppointmentCountAggregate");
Object.defineProperty(exports, "AppointmentCountAggregate", { enumerable: true, get: function () { return AppointmentCountAggregate_1.AppointmentCountAggregate; } });
var AppointmentGroupBy_1 = require("./AppointmentGroupBy");
Object.defineProperty(exports, "AppointmentGroupBy", { enumerable: true, get: function () { return AppointmentGroupBy_1.AppointmentGroupBy; } });
var AppointmentMaxAggregate_1 = require("./AppointmentMaxAggregate");
Object.defineProperty(exports, "AppointmentMaxAggregate", { enumerable: true, get: function () { return AppointmentMaxAggregate_1.AppointmentMaxAggregate; } });
var AppointmentMinAggregate_1 = require("./AppointmentMinAggregate");
Object.defineProperty(exports, "AppointmentMinAggregate", { enumerable: true, get: function () { return AppointmentMinAggregate_1.AppointmentMinAggregate; } });
var AppointmentSumAggregate_1 = require("./AppointmentSumAggregate");
Object.defineProperty(exports, "AppointmentSumAggregate", { enumerable: true, get: function () { return AppointmentSumAggregate_1.AppointmentSumAggregate; } });
var CreateManyAndReturnAppointment_1 = require("./CreateManyAndReturnAppointment");
Object.defineProperty(exports, "CreateManyAndReturnAppointment", { enumerable: true, get: function () { return CreateManyAndReturnAppointment_1.CreateManyAndReturnAppointment; } });
var CreateManyAndReturnUser_1 = require("./CreateManyAndReturnUser");
Object.defineProperty(exports, "CreateManyAndReturnUser", { enumerable: true, get: function () { return CreateManyAndReturnUser_1.CreateManyAndReturnUser; } });
var UserAvgAggregate_1 = require("./UserAvgAggregate");
Object.defineProperty(exports, "UserAvgAggregate", { enumerable: true, get: function () { return UserAvgAggregate_1.UserAvgAggregate; } });
var UserCount_1 = require("./UserCount");
Object.defineProperty(exports, "UserCount", { enumerable: true, get: function () { return UserCount_1.UserCount; } });
var UserCountAggregate_1 = require("./UserCountAggregate");
Object.defineProperty(exports, "UserCountAggregate", { enumerable: true, get: function () { return UserCountAggregate_1.UserCountAggregate; } });
var UserGroupBy_1 = require("./UserGroupBy");
Object.defineProperty(exports, "UserGroupBy", { enumerable: true, get: function () { return UserGroupBy_1.UserGroupBy; } });
var UserMaxAggregate_1 = require("./UserMaxAggregate");
Object.defineProperty(exports, "UserMaxAggregate", { enumerable: true, get: function () { return UserMaxAggregate_1.UserMaxAggregate; } });
var UserMinAggregate_1 = require("./UserMinAggregate");
Object.defineProperty(exports, "UserMinAggregate", { enumerable: true, get: function () { return UserMinAggregate_1.UserMinAggregate; } });
var UserSumAggregate_1 = require("./UserSumAggregate");
Object.defineProperty(exports, "UserSumAggregate", { enumerable: true, get: function () { return UserSumAggregate_1.UserSumAggregate; } });
__exportStar(require("./args"), exports);
