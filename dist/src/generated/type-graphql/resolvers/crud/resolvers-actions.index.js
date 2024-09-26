"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyPatientResolver = exports.CreateOnePatientResolver = exports.CreateManyAndReturnPatientResolver = exports.CreateManyPatientResolver = exports.AggregatePatientResolver = exports.UpsertOneDoctorResolver = exports.UpdateOneDoctorResolver = exports.UpdateManyDoctorResolver = exports.GroupByDoctorResolver = exports.FindUniqueDoctorOrThrowResolver = exports.FindUniqueDoctorResolver = exports.FindManyDoctorResolver = exports.FindFirstDoctorOrThrowResolver = exports.FindFirstDoctorResolver = exports.DeleteOneDoctorResolver = exports.DeleteManyDoctorResolver = exports.CreateOneDoctorResolver = exports.CreateManyAndReturnDoctorResolver = exports.CreateManyDoctorResolver = exports.AggregateDoctorResolver = exports.UpsertOneAvailabilitySlotResolver = exports.UpdateOneAvailabilitySlotResolver = exports.UpdateManyAvailabilitySlotResolver = exports.GroupByAvailabilitySlotResolver = exports.FindUniqueAvailabilitySlotOrThrowResolver = exports.FindUniqueAvailabilitySlotResolver = exports.FindManyAvailabilitySlotResolver = exports.FindFirstAvailabilitySlotOrThrowResolver = exports.FindFirstAvailabilitySlotResolver = exports.DeleteOneAvailabilitySlotResolver = exports.DeleteManyAvailabilitySlotResolver = exports.CreateOneAvailabilitySlotResolver = exports.CreateManyAndReturnAvailabilitySlotResolver = exports.CreateManyAvailabilitySlotResolver = exports.AggregateAvailabilitySlotResolver = exports.UpsertOneAppointmentResolver = exports.UpdateOneAppointmentResolver = exports.UpdateManyAppointmentResolver = exports.GroupByAppointmentResolver = exports.FindUniqueAppointmentOrThrowResolver = exports.FindUniqueAppointmentResolver = exports.FindManyAppointmentResolver = exports.FindFirstAppointmentOrThrowResolver = exports.FindFirstAppointmentResolver = exports.DeleteOneAppointmentResolver = exports.DeleteManyAppointmentResolver = exports.CreateOneAppointmentResolver = exports.CreateManyAndReturnAppointmentResolver = exports.CreateManyAppointmentResolver = exports.AggregateAppointmentResolver = void 0;
exports.UpsertOneUserResolver = exports.UpdateOneUserResolver = exports.UpdateManyUserResolver = exports.GroupByUserResolver = exports.FindUniqueUserOrThrowResolver = exports.FindUniqueUserResolver = exports.FindManyUserResolver = exports.FindFirstUserOrThrowResolver = exports.FindFirstUserResolver = exports.DeleteOneUserResolver = exports.DeleteManyUserResolver = exports.CreateOneUserResolver = exports.CreateManyAndReturnUserResolver = exports.CreateManyUserResolver = exports.AggregateUserResolver = exports.UpsertOneUnavailabilitySlotResolver = exports.UpdateOneUnavailabilitySlotResolver = exports.UpdateManyUnavailabilitySlotResolver = exports.GroupByUnavailabilitySlotResolver = exports.FindUniqueUnavailabilitySlotOrThrowResolver = exports.FindUniqueUnavailabilitySlotResolver = exports.FindManyUnavailabilitySlotResolver = exports.FindFirstUnavailabilitySlotOrThrowResolver = exports.FindFirstUnavailabilitySlotResolver = exports.DeleteOneUnavailabilitySlotResolver = exports.DeleteManyUnavailabilitySlotResolver = exports.CreateOneUnavailabilitySlotResolver = exports.CreateManyAndReturnUnavailabilitySlotResolver = exports.CreateManyUnavailabilitySlotResolver = exports.AggregateUnavailabilitySlotResolver = exports.UpsertOnePatientResolver = exports.UpdateOnePatientResolver = exports.UpdateManyPatientResolver = exports.GroupByPatientResolver = exports.FindUniquePatientOrThrowResolver = exports.FindUniquePatientResolver = exports.FindManyPatientResolver = exports.FindFirstPatientOrThrowResolver = exports.FindFirstPatientResolver = exports.DeleteOnePatientResolver = void 0;
var AggregateAppointmentResolver_1 = require("./Appointment/AggregateAppointmentResolver");
Object.defineProperty(exports, "AggregateAppointmentResolver", { enumerable: true, get: function () { return AggregateAppointmentResolver_1.AggregateAppointmentResolver; } });
var CreateManyAppointmentResolver_1 = require("./Appointment/CreateManyAppointmentResolver");
Object.defineProperty(exports, "CreateManyAppointmentResolver", { enumerable: true, get: function () { return CreateManyAppointmentResolver_1.CreateManyAppointmentResolver; } });
var CreateManyAndReturnAppointmentResolver_1 = require("./Appointment/CreateManyAndReturnAppointmentResolver");
Object.defineProperty(exports, "CreateManyAndReturnAppointmentResolver", { enumerable: true, get: function () { return CreateManyAndReturnAppointmentResolver_1.CreateManyAndReturnAppointmentResolver; } });
var CreateOneAppointmentResolver_1 = require("./Appointment/CreateOneAppointmentResolver");
Object.defineProperty(exports, "CreateOneAppointmentResolver", { enumerable: true, get: function () { return CreateOneAppointmentResolver_1.CreateOneAppointmentResolver; } });
var DeleteManyAppointmentResolver_1 = require("./Appointment/DeleteManyAppointmentResolver");
Object.defineProperty(exports, "DeleteManyAppointmentResolver", { enumerable: true, get: function () { return DeleteManyAppointmentResolver_1.DeleteManyAppointmentResolver; } });
var DeleteOneAppointmentResolver_1 = require("./Appointment/DeleteOneAppointmentResolver");
Object.defineProperty(exports, "DeleteOneAppointmentResolver", { enumerable: true, get: function () { return DeleteOneAppointmentResolver_1.DeleteOneAppointmentResolver; } });
var FindFirstAppointmentResolver_1 = require("./Appointment/FindFirstAppointmentResolver");
Object.defineProperty(exports, "FindFirstAppointmentResolver", { enumerable: true, get: function () { return FindFirstAppointmentResolver_1.FindFirstAppointmentResolver; } });
var FindFirstAppointmentOrThrowResolver_1 = require("./Appointment/FindFirstAppointmentOrThrowResolver");
Object.defineProperty(exports, "FindFirstAppointmentOrThrowResolver", { enumerable: true, get: function () { return FindFirstAppointmentOrThrowResolver_1.FindFirstAppointmentOrThrowResolver; } });
var FindManyAppointmentResolver_1 = require("./Appointment/FindManyAppointmentResolver");
Object.defineProperty(exports, "FindManyAppointmentResolver", { enumerable: true, get: function () { return FindManyAppointmentResolver_1.FindManyAppointmentResolver; } });
var FindUniqueAppointmentResolver_1 = require("./Appointment/FindUniqueAppointmentResolver");
Object.defineProperty(exports, "FindUniqueAppointmentResolver", { enumerable: true, get: function () { return FindUniqueAppointmentResolver_1.FindUniqueAppointmentResolver; } });
var FindUniqueAppointmentOrThrowResolver_1 = require("./Appointment/FindUniqueAppointmentOrThrowResolver");
Object.defineProperty(exports, "FindUniqueAppointmentOrThrowResolver", { enumerable: true, get: function () { return FindUniqueAppointmentOrThrowResolver_1.FindUniqueAppointmentOrThrowResolver; } });
var GroupByAppointmentResolver_1 = require("./Appointment/GroupByAppointmentResolver");
Object.defineProperty(exports, "GroupByAppointmentResolver", { enumerable: true, get: function () { return GroupByAppointmentResolver_1.GroupByAppointmentResolver; } });
var UpdateManyAppointmentResolver_1 = require("./Appointment/UpdateManyAppointmentResolver");
Object.defineProperty(exports, "UpdateManyAppointmentResolver", { enumerable: true, get: function () { return UpdateManyAppointmentResolver_1.UpdateManyAppointmentResolver; } });
var UpdateOneAppointmentResolver_1 = require("./Appointment/UpdateOneAppointmentResolver");
Object.defineProperty(exports, "UpdateOneAppointmentResolver", { enumerable: true, get: function () { return UpdateOneAppointmentResolver_1.UpdateOneAppointmentResolver; } });
var UpsertOneAppointmentResolver_1 = require("./Appointment/UpsertOneAppointmentResolver");
Object.defineProperty(exports, "UpsertOneAppointmentResolver", { enumerable: true, get: function () { return UpsertOneAppointmentResolver_1.UpsertOneAppointmentResolver; } });
var AggregateAvailabilitySlotResolver_1 = require("./AvailabilitySlot/AggregateAvailabilitySlotResolver");
Object.defineProperty(exports, "AggregateAvailabilitySlotResolver", { enumerable: true, get: function () { return AggregateAvailabilitySlotResolver_1.AggregateAvailabilitySlotResolver; } });
var CreateManyAvailabilitySlotResolver_1 = require("./AvailabilitySlot/CreateManyAvailabilitySlotResolver");
Object.defineProperty(exports, "CreateManyAvailabilitySlotResolver", { enumerable: true, get: function () { return CreateManyAvailabilitySlotResolver_1.CreateManyAvailabilitySlotResolver; } });
var CreateManyAndReturnAvailabilitySlotResolver_1 = require("./AvailabilitySlot/CreateManyAndReturnAvailabilitySlotResolver");
Object.defineProperty(exports, "CreateManyAndReturnAvailabilitySlotResolver", { enumerable: true, get: function () { return CreateManyAndReturnAvailabilitySlotResolver_1.CreateManyAndReturnAvailabilitySlotResolver; } });
var CreateOneAvailabilitySlotResolver_1 = require("./AvailabilitySlot/CreateOneAvailabilitySlotResolver");
Object.defineProperty(exports, "CreateOneAvailabilitySlotResolver", { enumerable: true, get: function () { return CreateOneAvailabilitySlotResolver_1.CreateOneAvailabilitySlotResolver; } });
var DeleteManyAvailabilitySlotResolver_1 = require("./AvailabilitySlot/DeleteManyAvailabilitySlotResolver");
Object.defineProperty(exports, "DeleteManyAvailabilitySlotResolver", { enumerable: true, get: function () { return DeleteManyAvailabilitySlotResolver_1.DeleteManyAvailabilitySlotResolver; } });
var DeleteOneAvailabilitySlotResolver_1 = require("./AvailabilitySlot/DeleteOneAvailabilitySlotResolver");
Object.defineProperty(exports, "DeleteOneAvailabilitySlotResolver", { enumerable: true, get: function () { return DeleteOneAvailabilitySlotResolver_1.DeleteOneAvailabilitySlotResolver; } });
var FindFirstAvailabilitySlotResolver_1 = require("./AvailabilitySlot/FindFirstAvailabilitySlotResolver");
Object.defineProperty(exports, "FindFirstAvailabilitySlotResolver", { enumerable: true, get: function () { return FindFirstAvailabilitySlotResolver_1.FindFirstAvailabilitySlotResolver; } });
var FindFirstAvailabilitySlotOrThrowResolver_1 = require("./AvailabilitySlot/FindFirstAvailabilitySlotOrThrowResolver");
Object.defineProperty(exports, "FindFirstAvailabilitySlotOrThrowResolver", { enumerable: true, get: function () { return FindFirstAvailabilitySlotOrThrowResolver_1.FindFirstAvailabilitySlotOrThrowResolver; } });
var FindManyAvailabilitySlotResolver_1 = require("./AvailabilitySlot/FindManyAvailabilitySlotResolver");
Object.defineProperty(exports, "FindManyAvailabilitySlotResolver", { enumerable: true, get: function () { return FindManyAvailabilitySlotResolver_1.FindManyAvailabilitySlotResolver; } });
var FindUniqueAvailabilitySlotResolver_1 = require("./AvailabilitySlot/FindUniqueAvailabilitySlotResolver");
Object.defineProperty(exports, "FindUniqueAvailabilitySlotResolver", { enumerable: true, get: function () { return FindUniqueAvailabilitySlotResolver_1.FindUniqueAvailabilitySlotResolver; } });
var FindUniqueAvailabilitySlotOrThrowResolver_1 = require("./AvailabilitySlot/FindUniqueAvailabilitySlotOrThrowResolver");
Object.defineProperty(exports, "FindUniqueAvailabilitySlotOrThrowResolver", { enumerable: true, get: function () { return FindUniqueAvailabilitySlotOrThrowResolver_1.FindUniqueAvailabilitySlotOrThrowResolver; } });
var GroupByAvailabilitySlotResolver_1 = require("./AvailabilitySlot/GroupByAvailabilitySlotResolver");
Object.defineProperty(exports, "GroupByAvailabilitySlotResolver", { enumerable: true, get: function () { return GroupByAvailabilitySlotResolver_1.GroupByAvailabilitySlotResolver; } });
var UpdateManyAvailabilitySlotResolver_1 = require("./AvailabilitySlot/UpdateManyAvailabilitySlotResolver");
Object.defineProperty(exports, "UpdateManyAvailabilitySlotResolver", { enumerable: true, get: function () { return UpdateManyAvailabilitySlotResolver_1.UpdateManyAvailabilitySlotResolver; } });
var UpdateOneAvailabilitySlotResolver_1 = require("./AvailabilitySlot/UpdateOneAvailabilitySlotResolver");
Object.defineProperty(exports, "UpdateOneAvailabilitySlotResolver", { enumerable: true, get: function () { return UpdateOneAvailabilitySlotResolver_1.UpdateOneAvailabilitySlotResolver; } });
var UpsertOneAvailabilitySlotResolver_1 = require("./AvailabilitySlot/UpsertOneAvailabilitySlotResolver");
Object.defineProperty(exports, "UpsertOneAvailabilitySlotResolver", { enumerable: true, get: function () { return UpsertOneAvailabilitySlotResolver_1.UpsertOneAvailabilitySlotResolver; } });
var AggregateDoctorResolver_1 = require("./Doctor/AggregateDoctorResolver");
Object.defineProperty(exports, "AggregateDoctorResolver", { enumerable: true, get: function () { return AggregateDoctorResolver_1.AggregateDoctorResolver; } });
var CreateManyDoctorResolver_1 = require("./Doctor/CreateManyDoctorResolver");
Object.defineProperty(exports, "CreateManyDoctorResolver", { enumerable: true, get: function () { return CreateManyDoctorResolver_1.CreateManyDoctorResolver; } });
var CreateManyAndReturnDoctorResolver_1 = require("./Doctor/CreateManyAndReturnDoctorResolver");
Object.defineProperty(exports, "CreateManyAndReturnDoctorResolver", { enumerable: true, get: function () { return CreateManyAndReturnDoctorResolver_1.CreateManyAndReturnDoctorResolver; } });
var CreateOneDoctorResolver_1 = require("./Doctor/CreateOneDoctorResolver");
Object.defineProperty(exports, "CreateOneDoctorResolver", { enumerable: true, get: function () { return CreateOneDoctorResolver_1.CreateOneDoctorResolver; } });
var DeleteManyDoctorResolver_1 = require("./Doctor/DeleteManyDoctorResolver");
Object.defineProperty(exports, "DeleteManyDoctorResolver", { enumerable: true, get: function () { return DeleteManyDoctorResolver_1.DeleteManyDoctorResolver; } });
var DeleteOneDoctorResolver_1 = require("./Doctor/DeleteOneDoctorResolver");
Object.defineProperty(exports, "DeleteOneDoctorResolver", { enumerable: true, get: function () { return DeleteOneDoctorResolver_1.DeleteOneDoctorResolver; } });
var FindFirstDoctorResolver_1 = require("./Doctor/FindFirstDoctorResolver");
Object.defineProperty(exports, "FindFirstDoctorResolver", { enumerable: true, get: function () { return FindFirstDoctorResolver_1.FindFirstDoctorResolver; } });
var FindFirstDoctorOrThrowResolver_1 = require("./Doctor/FindFirstDoctorOrThrowResolver");
Object.defineProperty(exports, "FindFirstDoctorOrThrowResolver", { enumerable: true, get: function () { return FindFirstDoctorOrThrowResolver_1.FindFirstDoctorOrThrowResolver; } });
var FindManyDoctorResolver_1 = require("./Doctor/FindManyDoctorResolver");
Object.defineProperty(exports, "FindManyDoctorResolver", { enumerable: true, get: function () { return FindManyDoctorResolver_1.FindManyDoctorResolver; } });
var FindUniqueDoctorResolver_1 = require("./Doctor/FindUniqueDoctorResolver");
Object.defineProperty(exports, "FindUniqueDoctorResolver", { enumerable: true, get: function () { return FindUniqueDoctorResolver_1.FindUniqueDoctorResolver; } });
var FindUniqueDoctorOrThrowResolver_1 = require("./Doctor/FindUniqueDoctorOrThrowResolver");
Object.defineProperty(exports, "FindUniqueDoctorOrThrowResolver", { enumerable: true, get: function () { return FindUniqueDoctorOrThrowResolver_1.FindUniqueDoctorOrThrowResolver; } });
var GroupByDoctorResolver_1 = require("./Doctor/GroupByDoctorResolver");
Object.defineProperty(exports, "GroupByDoctorResolver", { enumerable: true, get: function () { return GroupByDoctorResolver_1.GroupByDoctorResolver; } });
var UpdateManyDoctorResolver_1 = require("./Doctor/UpdateManyDoctorResolver");
Object.defineProperty(exports, "UpdateManyDoctorResolver", { enumerable: true, get: function () { return UpdateManyDoctorResolver_1.UpdateManyDoctorResolver; } });
var UpdateOneDoctorResolver_1 = require("./Doctor/UpdateOneDoctorResolver");
Object.defineProperty(exports, "UpdateOneDoctorResolver", { enumerable: true, get: function () { return UpdateOneDoctorResolver_1.UpdateOneDoctorResolver; } });
var UpsertOneDoctorResolver_1 = require("./Doctor/UpsertOneDoctorResolver");
Object.defineProperty(exports, "UpsertOneDoctorResolver", { enumerable: true, get: function () { return UpsertOneDoctorResolver_1.UpsertOneDoctorResolver; } });
var AggregatePatientResolver_1 = require("./Patient/AggregatePatientResolver");
Object.defineProperty(exports, "AggregatePatientResolver", { enumerable: true, get: function () { return AggregatePatientResolver_1.AggregatePatientResolver; } });
var CreateManyPatientResolver_1 = require("./Patient/CreateManyPatientResolver");
Object.defineProperty(exports, "CreateManyPatientResolver", { enumerable: true, get: function () { return CreateManyPatientResolver_1.CreateManyPatientResolver; } });
var CreateManyAndReturnPatientResolver_1 = require("./Patient/CreateManyAndReturnPatientResolver");
Object.defineProperty(exports, "CreateManyAndReturnPatientResolver", { enumerable: true, get: function () { return CreateManyAndReturnPatientResolver_1.CreateManyAndReturnPatientResolver; } });
var CreateOnePatientResolver_1 = require("./Patient/CreateOnePatientResolver");
Object.defineProperty(exports, "CreateOnePatientResolver", { enumerable: true, get: function () { return CreateOnePatientResolver_1.CreateOnePatientResolver; } });
var DeleteManyPatientResolver_1 = require("./Patient/DeleteManyPatientResolver");
Object.defineProperty(exports, "DeleteManyPatientResolver", { enumerable: true, get: function () { return DeleteManyPatientResolver_1.DeleteManyPatientResolver; } });
var DeleteOnePatientResolver_1 = require("./Patient/DeleteOnePatientResolver");
Object.defineProperty(exports, "DeleteOnePatientResolver", { enumerable: true, get: function () { return DeleteOnePatientResolver_1.DeleteOnePatientResolver; } });
var FindFirstPatientResolver_1 = require("./Patient/FindFirstPatientResolver");
Object.defineProperty(exports, "FindFirstPatientResolver", { enumerable: true, get: function () { return FindFirstPatientResolver_1.FindFirstPatientResolver; } });
var FindFirstPatientOrThrowResolver_1 = require("./Patient/FindFirstPatientOrThrowResolver");
Object.defineProperty(exports, "FindFirstPatientOrThrowResolver", { enumerable: true, get: function () { return FindFirstPatientOrThrowResolver_1.FindFirstPatientOrThrowResolver; } });
var FindManyPatientResolver_1 = require("./Patient/FindManyPatientResolver");
Object.defineProperty(exports, "FindManyPatientResolver", { enumerable: true, get: function () { return FindManyPatientResolver_1.FindManyPatientResolver; } });
var FindUniquePatientResolver_1 = require("./Patient/FindUniquePatientResolver");
Object.defineProperty(exports, "FindUniquePatientResolver", { enumerable: true, get: function () { return FindUniquePatientResolver_1.FindUniquePatientResolver; } });
var FindUniquePatientOrThrowResolver_1 = require("./Patient/FindUniquePatientOrThrowResolver");
Object.defineProperty(exports, "FindUniquePatientOrThrowResolver", { enumerable: true, get: function () { return FindUniquePatientOrThrowResolver_1.FindUniquePatientOrThrowResolver; } });
var GroupByPatientResolver_1 = require("./Patient/GroupByPatientResolver");
Object.defineProperty(exports, "GroupByPatientResolver", { enumerable: true, get: function () { return GroupByPatientResolver_1.GroupByPatientResolver; } });
var UpdateManyPatientResolver_1 = require("./Patient/UpdateManyPatientResolver");
Object.defineProperty(exports, "UpdateManyPatientResolver", { enumerable: true, get: function () { return UpdateManyPatientResolver_1.UpdateManyPatientResolver; } });
var UpdateOnePatientResolver_1 = require("./Patient/UpdateOnePatientResolver");
Object.defineProperty(exports, "UpdateOnePatientResolver", { enumerable: true, get: function () { return UpdateOnePatientResolver_1.UpdateOnePatientResolver; } });
var UpsertOnePatientResolver_1 = require("./Patient/UpsertOnePatientResolver");
Object.defineProperty(exports, "UpsertOnePatientResolver", { enumerable: true, get: function () { return UpsertOnePatientResolver_1.UpsertOnePatientResolver; } });
var AggregateUnavailabilitySlotResolver_1 = require("./UnavailabilitySlot/AggregateUnavailabilitySlotResolver");
Object.defineProperty(exports, "AggregateUnavailabilitySlotResolver", { enumerable: true, get: function () { return AggregateUnavailabilitySlotResolver_1.AggregateUnavailabilitySlotResolver; } });
var CreateManyUnavailabilitySlotResolver_1 = require("./UnavailabilitySlot/CreateManyUnavailabilitySlotResolver");
Object.defineProperty(exports, "CreateManyUnavailabilitySlotResolver", { enumerable: true, get: function () { return CreateManyUnavailabilitySlotResolver_1.CreateManyUnavailabilitySlotResolver; } });
var CreateManyAndReturnUnavailabilitySlotResolver_1 = require("./UnavailabilitySlot/CreateManyAndReturnUnavailabilitySlotResolver");
Object.defineProperty(exports, "CreateManyAndReturnUnavailabilitySlotResolver", { enumerable: true, get: function () { return CreateManyAndReturnUnavailabilitySlotResolver_1.CreateManyAndReturnUnavailabilitySlotResolver; } });
var CreateOneUnavailabilitySlotResolver_1 = require("./UnavailabilitySlot/CreateOneUnavailabilitySlotResolver");
Object.defineProperty(exports, "CreateOneUnavailabilitySlotResolver", { enumerable: true, get: function () { return CreateOneUnavailabilitySlotResolver_1.CreateOneUnavailabilitySlotResolver; } });
var DeleteManyUnavailabilitySlotResolver_1 = require("./UnavailabilitySlot/DeleteManyUnavailabilitySlotResolver");
Object.defineProperty(exports, "DeleteManyUnavailabilitySlotResolver", { enumerable: true, get: function () { return DeleteManyUnavailabilitySlotResolver_1.DeleteManyUnavailabilitySlotResolver; } });
var DeleteOneUnavailabilitySlotResolver_1 = require("./UnavailabilitySlot/DeleteOneUnavailabilitySlotResolver");
Object.defineProperty(exports, "DeleteOneUnavailabilitySlotResolver", { enumerable: true, get: function () { return DeleteOneUnavailabilitySlotResolver_1.DeleteOneUnavailabilitySlotResolver; } });
var FindFirstUnavailabilitySlotResolver_1 = require("./UnavailabilitySlot/FindFirstUnavailabilitySlotResolver");
Object.defineProperty(exports, "FindFirstUnavailabilitySlotResolver", { enumerable: true, get: function () { return FindFirstUnavailabilitySlotResolver_1.FindFirstUnavailabilitySlotResolver; } });
var FindFirstUnavailabilitySlotOrThrowResolver_1 = require("./UnavailabilitySlot/FindFirstUnavailabilitySlotOrThrowResolver");
Object.defineProperty(exports, "FindFirstUnavailabilitySlotOrThrowResolver", { enumerable: true, get: function () { return FindFirstUnavailabilitySlotOrThrowResolver_1.FindFirstUnavailabilitySlotOrThrowResolver; } });
var FindManyUnavailabilitySlotResolver_1 = require("./UnavailabilitySlot/FindManyUnavailabilitySlotResolver");
Object.defineProperty(exports, "FindManyUnavailabilitySlotResolver", { enumerable: true, get: function () { return FindManyUnavailabilitySlotResolver_1.FindManyUnavailabilitySlotResolver; } });
var FindUniqueUnavailabilitySlotResolver_1 = require("./UnavailabilitySlot/FindUniqueUnavailabilitySlotResolver");
Object.defineProperty(exports, "FindUniqueUnavailabilitySlotResolver", { enumerable: true, get: function () { return FindUniqueUnavailabilitySlotResolver_1.FindUniqueUnavailabilitySlotResolver; } });
var FindUniqueUnavailabilitySlotOrThrowResolver_1 = require("./UnavailabilitySlot/FindUniqueUnavailabilitySlotOrThrowResolver");
Object.defineProperty(exports, "FindUniqueUnavailabilitySlotOrThrowResolver", { enumerable: true, get: function () { return FindUniqueUnavailabilitySlotOrThrowResolver_1.FindUniqueUnavailabilitySlotOrThrowResolver; } });
var GroupByUnavailabilitySlotResolver_1 = require("./UnavailabilitySlot/GroupByUnavailabilitySlotResolver");
Object.defineProperty(exports, "GroupByUnavailabilitySlotResolver", { enumerable: true, get: function () { return GroupByUnavailabilitySlotResolver_1.GroupByUnavailabilitySlotResolver; } });
var UpdateManyUnavailabilitySlotResolver_1 = require("./UnavailabilitySlot/UpdateManyUnavailabilitySlotResolver");
Object.defineProperty(exports, "UpdateManyUnavailabilitySlotResolver", { enumerable: true, get: function () { return UpdateManyUnavailabilitySlotResolver_1.UpdateManyUnavailabilitySlotResolver; } });
var UpdateOneUnavailabilitySlotResolver_1 = require("./UnavailabilitySlot/UpdateOneUnavailabilitySlotResolver");
Object.defineProperty(exports, "UpdateOneUnavailabilitySlotResolver", { enumerable: true, get: function () { return UpdateOneUnavailabilitySlotResolver_1.UpdateOneUnavailabilitySlotResolver; } });
var UpsertOneUnavailabilitySlotResolver_1 = require("./UnavailabilitySlot/UpsertOneUnavailabilitySlotResolver");
Object.defineProperty(exports, "UpsertOneUnavailabilitySlotResolver", { enumerable: true, get: function () { return UpsertOneUnavailabilitySlotResolver_1.UpsertOneUnavailabilitySlotResolver; } });
var AggregateUserResolver_1 = require("./User/AggregateUserResolver");
Object.defineProperty(exports, "AggregateUserResolver", { enumerable: true, get: function () { return AggregateUserResolver_1.AggregateUserResolver; } });
var CreateManyUserResolver_1 = require("./User/CreateManyUserResolver");
Object.defineProperty(exports, "CreateManyUserResolver", { enumerable: true, get: function () { return CreateManyUserResolver_1.CreateManyUserResolver; } });
var CreateManyAndReturnUserResolver_1 = require("./User/CreateManyAndReturnUserResolver");
Object.defineProperty(exports, "CreateManyAndReturnUserResolver", { enumerable: true, get: function () { return CreateManyAndReturnUserResolver_1.CreateManyAndReturnUserResolver; } });
var CreateOneUserResolver_1 = require("./User/CreateOneUserResolver");
Object.defineProperty(exports, "CreateOneUserResolver", { enumerable: true, get: function () { return CreateOneUserResolver_1.CreateOneUserResolver; } });
var DeleteManyUserResolver_1 = require("./User/DeleteManyUserResolver");
Object.defineProperty(exports, "DeleteManyUserResolver", { enumerable: true, get: function () { return DeleteManyUserResolver_1.DeleteManyUserResolver; } });
var DeleteOneUserResolver_1 = require("./User/DeleteOneUserResolver");
Object.defineProperty(exports, "DeleteOneUserResolver", { enumerable: true, get: function () { return DeleteOneUserResolver_1.DeleteOneUserResolver; } });
var FindFirstUserResolver_1 = require("./User/FindFirstUserResolver");
Object.defineProperty(exports, "FindFirstUserResolver", { enumerable: true, get: function () { return FindFirstUserResolver_1.FindFirstUserResolver; } });
var FindFirstUserOrThrowResolver_1 = require("./User/FindFirstUserOrThrowResolver");
Object.defineProperty(exports, "FindFirstUserOrThrowResolver", { enumerable: true, get: function () { return FindFirstUserOrThrowResolver_1.FindFirstUserOrThrowResolver; } });
var FindManyUserResolver_1 = require("./User/FindManyUserResolver");
Object.defineProperty(exports, "FindManyUserResolver", { enumerable: true, get: function () { return FindManyUserResolver_1.FindManyUserResolver; } });
var FindUniqueUserResolver_1 = require("./User/FindUniqueUserResolver");
Object.defineProperty(exports, "FindUniqueUserResolver", { enumerable: true, get: function () { return FindUniqueUserResolver_1.FindUniqueUserResolver; } });
var FindUniqueUserOrThrowResolver_1 = require("./User/FindUniqueUserOrThrowResolver");
Object.defineProperty(exports, "FindUniqueUserOrThrowResolver", { enumerable: true, get: function () { return FindUniqueUserOrThrowResolver_1.FindUniqueUserOrThrowResolver; } });
var GroupByUserResolver_1 = require("./User/GroupByUserResolver");
Object.defineProperty(exports, "GroupByUserResolver", { enumerable: true, get: function () { return GroupByUserResolver_1.GroupByUserResolver; } });
var UpdateManyUserResolver_1 = require("./User/UpdateManyUserResolver");
Object.defineProperty(exports, "UpdateManyUserResolver", { enumerable: true, get: function () { return UpdateManyUserResolver_1.UpdateManyUserResolver; } });
var UpdateOneUserResolver_1 = require("./User/UpdateOneUserResolver");
Object.defineProperty(exports, "UpdateOneUserResolver", { enumerable: true, get: function () { return UpdateOneUserResolver_1.UpdateOneUserResolver; } });
var UpsertOneUserResolver_1 = require("./User/UpsertOneUserResolver");
Object.defineProperty(exports, "UpsertOneUserResolver", { enumerable: true, get: function () { return UpsertOneUserResolver_1.UpsertOneUserResolver; } });
