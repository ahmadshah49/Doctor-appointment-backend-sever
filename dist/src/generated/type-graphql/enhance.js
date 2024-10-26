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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyInputTypesEnhanceMap = exports.applyOutputTypesEnhanceMap = exports.applyModelsEnhanceMap = exports.applyRelationResolversEnhanceMap = exports.applyArgsTypesEnhanceMap = exports.applyResolversEnhanceMap = void 0;
const tslib = __importStar(require("tslib"));
const crudResolvers = __importStar(require("./resolvers/crud/resolvers-crud.index"));
const argsTypes = __importStar(require("./resolvers/crud/args.index"));
const actionResolvers = __importStar(require("./resolvers/crud/resolvers-actions.index"));
const relationResolvers = __importStar(require("./resolvers/relations/resolvers.index"));
const models = __importStar(require("./models"));
const outputTypes = __importStar(require("./resolvers/outputs"));
const inputTypes = __importStar(require("./resolvers/inputs"));
const crudResolversMap = {
    User: crudResolvers.UserCrudResolver,
    Doctor: crudResolvers.DoctorCrudResolver,
    Patient: crudResolvers.PatientCrudResolver,
    Appointment: crudResolvers.AppointmentCrudResolver,
    AvailabilitySlot: crudResolvers.AvailabilitySlotCrudResolver,
    UnavailabilitySlot: crudResolvers.UnavailabilitySlotCrudResolver
};
const actionResolversMap = {
    User: {
        aggregateUser: actionResolvers.AggregateUserResolver,
        createManyUser: actionResolvers.CreateManyUserResolver,
        createManyAndReturnUser: actionResolvers.CreateManyAndReturnUserResolver,
        createOneUser: actionResolvers.CreateOneUserResolver,
        deleteManyUser: actionResolvers.DeleteManyUserResolver,
        deleteOneUser: actionResolvers.DeleteOneUserResolver,
        findFirstUser: actionResolvers.FindFirstUserResolver,
        findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
        users: actionResolvers.FindManyUserResolver,
        user: actionResolvers.FindUniqueUserResolver,
        getUser: actionResolvers.FindUniqueUserOrThrowResolver,
        groupByUser: actionResolvers.GroupByUserResolver,
        updateManyUser: actionResolvers.UpdateManyUserResolver,
        updateOneUser: actionResolvers.UpdateOneUserResolver,
        upsertOneUser: actionResolvers.UpsertOneUserResolver
    },
    Doctor: {
        aggregateDoctor: actionResolvers.AggregateDoctorResolver,
        createManyDoctor: actionResolvers.CreateManyDoctorResolver,
        createManyAndReturnDoctor: actionResolvers.CreateManyAndReturnDoctorResolver,
        createOneDoctor: actionResolvers.CreateOneDoctorResolver,
        deleteManyDoctor: actionResolvers.DeleteManyDoctorResolver,
        deleteOneDoctor: actionResolvers.DeleteOneDoctorResolver,
        findFirstDoctor: actionResolvers.FindFirstDoctorResolver,
        findFirstDoctorOrThrow: actionResolvers.FindFirstDoctorOrThrowResolver,
        doctors: actionResolvers.FindManyDoctorResolver,
        doctor: actionResolvers.FindUniqueDoctorResolver,
        getDoctor: actionResolvers.FindUniqueDoctorOrThrowResolver,
        groupByDoctor: actionResolvers.GroupByDoctorResolver,
        updateManyDoctor: actionResolvers.UpdateManyDoctorResolver,
        updateOneDoctor: actionResolvers.UpdateOneDoctorResolver,
        upsertOneDoctor: actionResolvers.UpsertOneDoctorResolver
    },
    Patient: {
        aggregatePatient: actionResolvers.AggregatePatientResolver,
        createManyPatient: actionResolvers.CreateManyPatientResolver,
        createManyAndReturnPatient: actionResolvers.CreateManyAndReturnPatientResolver,
        createOnePatient: actionResolvers.CreateOnePatientResolver,
        deleteManyPatient: actionResolvers.DeleteManyPatientResolver,
        deleteOnePatient: actionResolvers.DeleteOnePatientResolver,
        findFirstPatient: actionResolvers.FindFirstPatientResolver,
        findFirstPatientOrThrow: actionResolvers.FindFirstPatientOrThrowResolver,
        patients: actionResolvers.FindManyPatientResolver,
        patient: actionResolvers.FindUniquePatientResolver,
        getPatient: actionResolvers.FindUniquePatientOrThrowResolver,
        groupByPatient: actionResolvers.GroupByPatientResolver,
        updateManyPatient: actionResolvers.UpdateManyPatientResolver,
        updateOnePatient: actionResolvers.UpdateOnePatientResolver,
        upsertOnePatient: actionResolvers.UpsertOnePatientResolver
    },
    Appointment: {
        aggregateAppointment: actionResolvers.AggregateAppointmentResolver,
        createManyAppointment: actionResolvers.CreateManyAppointmentResolver,
        createManyAndReturnAppointment: actionResolvers.CreateManyAndReturnAppointmentResolver,
        createOneAppointment: actionResolvers.CreateOneAppointmentResolver,
        deleteManyAppointment: actionResolvers.DeleteManyAppointmentResolver,
        deleteOneAppointment: actionResolvers.DeleteOneAppointmentResolver,
        findFirstAppointment: actionResolvers.FindFirstAppointmentResolver,
        findFirstAppointmentOrThrow: actionResolvers.FindFirstAppointmentOrThrowResolver,
        appointments: actionResolvers.FindManyAppointmentResolver,
        appointment: actionResolvers.FindUniqueAppointmentResolver,
        getAppointment: actionResolvers.FindUniqueAppointmentOrThrowResolver,
        groupByAppointment: actionResolvers.GroupByAppointmentResolver,
        updateManyAppointment: actionResolvers.UpdateManyAppointmentResolver,
        updateOneAppointment: actionResolvers.UpdateOneAppointmentResolver,
        upsertOneAppointment: actionResolvers.UpsertOneAppointmentResolver
    },
    AvailabilitySlot: {
        aggregateAvailabilitySlot: actionResolvers.AggregateAvailabilitySlotResolver,
        createManyAvailabilitySlot: actionResolvers.CreateManyAvailabilitySlotResolver,
        createManyAndReturnAvailabilitySlot: actionResolvers.CreateManyAndReturnAvailabilitySlotResolver,
        createOneAvailabilitySlot: actionResolvers.CreateOneAvailabilitySlotResolver,
        deleteManyAvailabilitySlot: actionResolvers.DeleteManyAvailabilitySlotResolver,
        deleteOneAvailabilitySlot: actionResolvers.DeleteOneAvailabilitySlotResolver,
        findFirstAvailabilitySlot: actionResolvers.FindFirstAvailabilitySlotResolver,
        findFirstAvailabilitySlotOrThrow: actionResolvers.FindFirstAvailabilitySlotOrThrowResolver,
        availabilitySlots: actionResolvers.FindManyAvailabilitySlotResolver,
        availabilitySlot: actionResolvers.FindUniqueAvailabilitySlotResolver,
        getAvailabilitySlot: actionResolvers.FindUniqueAvailabilitySlotOrThrowResolver,
        groupByAvailabilitySlot: actionResolvers.GroupByAvailabilitySlotResolver,
        updateManyAvailabilitySlot: actionResolvers.UpdateManyAvailabilitySlotResolver,
        updateOneAvailabilitySlot: actionResolvers.UpdateOneAvailabilitySlotResolver,
        upsertOneAvailabilitySlot: actionResolvers.UpsertOneAvailabilitySlotResolver
    },
    UnavailabilitySlot: {
        aggregateUnavailabilitySlot: actionResolvers.AggregateUnavailabilitySlotResolver,
        createManyUnavailabilitySlot: actionResolvers.CreateManyUnavailabilitySlotResolver,
        createManyAndReturnUnavailabilitySlot: actionResolvers.CreateManyAndReturnUnavailabilitySlotResolver,
        createOneUnavailabilitySlot: actionResolvers.CreateOneUnavailabilitySlotResolver,
        deleteManyUnavailabilitySlot: actionResolvers.DeleteManyUnavailabilitySlotResolver,
        deleteOneUnavailabilitySlot: actionResolvers.DeleteOneUnavailabilitySlotResolver,
        findFirstUnavailabilitySlot: actionResolvers.FindFirstUnavailabilitySlotResolver,
        findFirstUnavailabilitySlotOrThrow: actionResolvers.FindFirstUnavailabilitySlotOrThrowResolver,
        unavailabilitySlots: actionResolvers.FindManyUnavailabilitySlotResolver,
        unavailabilitySlot: actionResolvers.FindUniqueUnavailabilitySlotResolver,
        getUnavailabilitySlot: actionResolvers.FindUniqueUnavailabilitySlotOrThrowResolver,
        groupByUnavailabilitySlot: actionResolvers.GroupByUnavailabilitySlotResolver,
        updateManyUnavailabilitySlot: actionResolvers.UpdateManyUnavailabilitySlotResolver,
        updateOneUnavailabilitySlot: actionResolvers.UpdateOneUnavailabilitySlotResolver,
        upsertOneUnavailabilitySlot: actionResolvers.UpsertOneUnavailabilitySlotResolver
    }
};
const crudResolversInfo = {
    User: ["aggregateUser", "createManyUser", "createManyAndReturnUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    Doctor: ["aggregateDoctor", "createManyDoctor", "createManyAndReturnDoctor", "createOneDoctor", "deleteManyDoctor", "deleteOneDoctor", "findFirstDoctor", "findFirstDoctorOrThrow", "doctors", "doctor", "getDoctor", "groupByDoctor", "updateManyDoctor", "updateOneDoctor", "upsertOneDoctor"],
    Patient: ["aggregatePatient", "createManyPatient", "createManyAndReturnPatient", "createOnePatient", "deleteManyPatient", "deleteOnePatient", "findFirstPatient", "findFirstPatientOrThrow", "patients", "patient", "getPatient", "groupByPatient", "updateManyPatient", "updateOnePatient", "upsertOnePatient"],
    Appointment: ["aggregateAppointment", "createManyAppointment", "createManyAndReturnAppointment", "createOneAppointment", "deleteManyAppointment", "deleteOneAppointment", "findFirstAppointment", "findFirstAppointmentOrThrow", "appointments", "appointment", "getAppointment", "groupByAppointment", "updateManyAppointment", "updateOneAppointment", "upsertOneAppointment"],
    AvailabilitySlot: ["aggregateAvailabilitySlot", "createManyAvailabilitySlot", "createManyAndReturnAvailabilitySlot", "createOneAvailabilitySlot", "deleteManyAvailabilitySlot", "deleteOneAvailabilitySlot", "findFirstAvailabilitySlot", "findFirstAvailabilitySlotOrThrow", "availabilitySlots", "availabilitySlot", "getAvailabilitySlot", "groupByAvailabilitySlot", "updateManyAvailabilitySlot", "updateOneAvailabilitySlot", "upsertOneAvailabilitySlot"],
    UnavailabilitySlot: ["aggregateUnavailabilitySlot", "createManyUnavailabilitySlot", "createManyAndReturnUnavailabilitySlot", "createOneUnavailabilitySlot", "deleteManyUnavailabilitySlot", "deleteOneUnavailabilitySlot", "findFirstUnavailabilitySlot", "findFirstUnavailabilitySlotOrThrow", "unavailabilitySlots", "unavailabilitySlot", "getUnavailabilitySlot", "groupByUnavailabilitySlot", "updateManyUnavailabilitySlot", "updateOneUnavailabilitySlot", "upsertOneUnavailabilitySlot"]
};
const argsInfo = {
    AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUserArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnUserArgs: ["data", "skipDuplicates"],
    CreateOneUserArgs: ["data"],
    DeleteManyUserArgs: ["where"],
    DeleteOneUserArgs: ["where"],
    FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUserArgs: ["where"],
    FindUniqueUserOrThrowArgs: ["where"],
    GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUserArgs: ["data", "where"],
    UpdateOneUserArgs: ["data", "where"],
    UpsertOneUserArgs: ["where", "create", "update"],
    AggregateDoctorArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyDoctorArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnDoctorArgs: ["data", "skipDuplicates"],
    CreateOneDoctorArgs: ["data"],
    DeleteManyDoctorArgs: ["where"],
    DeleteOneDoctorArgs: ["where"],
    FindFirstDoctorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstDoctorOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyDoctorArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueDoctorArgs: ["where"],
    FindUniqueDoctorOrThrowArgs: ["where"],
    GroupByDoctorArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyDoctorArgs: ["data", "where"],
    UpdateOneDoctorArgs: ["data", "where"],
    UpsertOneDoctorArgs: ["where", "create", "update"],
    AggregatePatientArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyPatientArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnPatientArgs: ["data", "skipDuplicates"],
    CreateOnePatientArgs: ["data"],
    DeleteManyPatientArgs: ["where"],
    DeleteOnePatientArgs: ["where"],
    FindFirstPatientArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstPatientOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyPatientArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniquePatientArgs: ["where"],
    FindUniquePatientOrThrowArgs: ["where"],
    GroupByPatientArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyPatientArgs: ["data", "where"],
    UpdateOnePatientArgs: ["data", "where"],
    UpsertOnePatientArgs: ["where", "create", "update"],
    AggregateAppointmentArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyAppointmentArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnAppointmentArgs: ["data", "skipDuplicates"],
    CreateOneAppointmentArgs: ["data"],
    DeleteManyAppointmentArgs: ["where"],
    DeleteOneAppointmentArgs: ["where"],
    FindFirstAppointmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstAppointmentOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAppointmentArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueAppointmentArgs: ["where"],
    FindUniqueAppointmentOrThrowArgs: ["where"],
    GroupByAppointmentArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyAppointmentArgs: ["data", "where"],
    UpdateOneAppointmentArgs: ["data", "where"],
    UpsertOneAppointmentArgs: ["where", "create", "update"],
    AggregateAvailabilitySlotArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyAvailabilitySlotArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnAvailabilitySlotArgs: ["data", "skipDuplicates"],
    CreateOneAvailabilitySlotArgs: ["data"],
    DeleteManyAvailabilitySlotArgs: ["where"],
    DeleteOneAvailabilitySlotArgs: ["where"],
    FindFirstAvailabilitySlotArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstAvailabilitySlotOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyAvailabilitySlotArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueAvailabilitySlotArgs: ["where"],
    FindUniqueAvailabilitySlotOrThrowArgs: ["where"],
    GroupByAvailabilitySlotArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyAvailabilitySlotArgs: ["data", "where"],
    UpdateOneAvailabilitySlotArgs: ["data", "where"],
    UpsertOneAvailabilitySlotArgs: ["where", "create", "update"],
    AggregateUnavailabilitySlotArgs: ["where", "orderBy", "cursor", "take", "skip"],
    CreateManyUnavailabilitySlotArgs: ["data", "skipDuplicates"],
    CreateManyAndReturnUnavailabilitySlotArgs: ["data", "skipDuplicates"],
    CreateOneUnavailabilitySlotArgs: ["data"],
    DeleteManyUnavailabilitySlotArgs: ["where"],
    DeleteOneUnavailabilitySlotArgs: ["where"],
    FindFirstUnavailabilitySlotArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindFirstUnavailabilitySlotOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindManyUnavailabilitySlotArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
    FindUniqueUnavailabilitySlotArgs: ["where"],
    FindUniqueUnavailabilitySlotOrThrowArgs: ["where"],
    GroupByUnavailabilitySlotArgs: ["where", "orderBy", "by", "having", "take", "skip"],
    UpdateManyUnavailabilitySlotArgs: ["data", "where"],
    UpdateOneUnavailabilitySlotArgs: ["data", "where"],
    UpsertOneUnavailabilitySlotArgs: ["where", "create", "update"]
};
function applyResolversEnhanceMap(resolversEnhanceMap) {
    const mutationOperationPrefixes = [
        "createOne", "createMany", "createManyAndReturn", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
    ];
    for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
        const modelName = resolversEnhanceMapKey;
        const crudTarget = crudResolversMap[modelName].prototype;
        const resolverActionsConfig = resolversEnhanceMap[modelName];
        const actionResolversConfig = actionResolversMap[modelName];
        const allActionsDecorators = resolverActionsConfig._all;
        const resolverActionNames = crudResolversInfo[modelName];
        for (const resolverActionName of resolverActionNames) {
            const maybeDecoratorsOrFn = resolverActionsConfig[resolverActionName];
            const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
            const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
            const mainDecorators = [
                ...allActionsDecorators ?? [],
                ...operationKindDecorators ?? [],
            ];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(mainDecorators);
            }
            else {
                decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            const actionTarget = actionResolversConfig[resolverActionName].prototype;
            tslib.__decorate(decorators, crudTarget, resolverActionName, null);
            tslib.__decorate(decorators, actionTarget, resolverActionName, null);
        }
    }
}
exports.applyResolversEnhanceMap = applyResolversEnhanceMap;
function applyArgsTypesEnhanceMap(argsTypesEnhanceMap) {
    for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
        const argsTypeName = argsTypesEnhanceMapKey;
        const typeConfig = argsTypesEnhanceMap[argsTypeName];
        const typeClass = argsTypes[argsTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, argsInfo[argsTypeName]);
    }
}
exports.applyArgsTypesEnhanceMap = applyArgsTypesEnhanceMap;
const relationResolversMap = {
    User: relationResolvers.UserRelationsResolver,
    Doctor: relationResolvers.DoctorRelationsResolver,
    Patient: relationResolvers.PatientRelationsResolver,
    Appointment: relationResolvers.AppointmentRelationsResolver,
    AvailabilitySlot: relationResolvers.AvailabilitySlotRelationsResolver,
    UnavailabilitySlot: relationResolvers.UnavailabilitySlotRelationsResolver
};
const relationResolversInfo = {
    User: ["doctor", "patient"],
    Doctor: ["User", "patients", "appointments", "AvailabilitySlot", "UnavailabilitySlot"],
    Patient: ["Doctor", "User", "appointments"],
    Appointment: ["Doctor", "Patient"],
    AvailabilitySlot: ["doctor"],
    UnavailabilitySlot: ["doctor"]
};
function applyRelationResolversEnhanceMap(relationResolversEnhanceMap) {
    for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
        const modelName = relationResolversEnhanceMapKey;
        const relationResolverTarget = relationResolversMap[modelName].prototype;
        const relationResolverActionsConfig = relationResolversEnhanceMap[modelName];
        const allActionsDecorators = relationResolverActionsConfig._all ?? [];
        const relationResolverActionNames = relationResolversInfo[modelName];
        for (const relationResolverActionName of relationResolverActionNames) {
            const maybeDecoratorsOrFn = relationResolverActionsConfig[relationResolverActionName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allActionsDecorators);
            }
            else {
                decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
        }
    }
}
exports.applyRelationResolversEnhanceMap = applyRelationResolversEnhanceMap;
function applyTypeClassEnhanceConfig(enhanceConfig, typeClass, typePrototype, typeFieldNames) {
    if (enhanceConfig.class) {
        tslib.__decorate(enhanceConfig.class, typeClass);
    }
    if (enhanceConfig.fields) {
        const allFieldsDecorators = enhanceConfig.fields._all ?? [];
        for (const typeFieldName of typeFieldNames) {
            const maybeDecoratorsOrFn = enhanceConfig.fields[typeFieldName];
            let decorators;
            if (typeof maybeDecoratorsOrFn === "function") {
                decorators = maybeDecoratorsOrFn(allFieldsDecorators);
            }
            else {
                decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
            }
            tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
        }
    }
}
const modelsInfo = {
    User: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken"],
    Doctor: ["id", "userId", "name", "profilePhoto", "address", "email", "gender"],
    Patient: ["id", "age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "doctorId", "userId"],
    Appointment: ["id", "fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime", "doctorId", "patientId"],
    AvailabilitySlot: ["id", "startTime", "endTime", "doctorId"],
    UnavailabilitySlot: ["id", "doctorId", "startTime", "endTime", "startDate", "endDate", "reason", "isAvailable"]
};
function applyModelsEnhanceMap(modelsEnhanceMap) {
    for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
        const modelName = modelsEnhanceMapKey;
        const modelConfig = modelsEnhanceMap[modelName];
        const modelClass = models[modelName];
        const modelTarget = modelClass.prototype;
        applyTypeClassEnhanceConfig(modelConfig, modelClass, modelTarget, modelsInfo[modelName]);
    }
}
exports.applyModelsEnhanceMap = applyModelsEnhanceMap;
const outputsInfo = {
    AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
    UserGroupBy: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateDoctor: ["_count", "_avg", "_sum", "_min", "_max"],
    DoctorGroupBy: ["id", "userId", "name", "profilePhoto", "address", "email", "gender", "_count", "_avg", "_sum", "_min", "_max"],
    AggregatePatient: ["_count", "_avg", "_sum", "_min", "_max"],
    PatientGroupBy: ["id", "age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "doctorId", "userId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateAppointment: ["_count", "_avg", "_sum", "_min", "_max"],
    AppointmentGroupBy: ["id", "fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime", "doctorId", "patientId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateAvailabilitySlot: ["_count", "_avg", "_sum", "_min", "_max"],
    AvailabilitySlotGroupBy: ["id", "startTime", "endTime", "doctorId", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateUnavailabilitySlot: ["_count", "_avg", "_sum", "_min", "_max"],
    UnavailabilitySlotGroupBy: ["id", "doctorId", "startTime", "endTime", "startDate", "endDate", "reason", "isAvailable", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCountAggregate: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken", "_all"],
    UserAvgAggregate: ["id"],
    UserSumAggregate: ["id"],
    UserMinAggregate: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken"],
    UserMaxAggregate: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken"],
    DoctorCount: ["patients", "appointments", "AvailabilitySlot", "UnavailabilitySlot"],
    DoctorCountAggregate: ["id", "userId", "name", "profilePhoto", "address", "email", "gender", "_all"],
    DoctorAvgAggregate: ["id", "userId"],
    DoctorSumAggregate: ["id", "userId"],
    DoctorMinAggregate: ["id", "userId", "name", "profilePhoto", "address", "email", "gender"],
    DoctorMaxAggregate: ["id", "userId", "name", "profilePhoto", "address", "email", "gender"],
    PatientCount: ["appointments"],
    PatientCountAggregate: ["id", "age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "doctorId", "userId", "_all"],
    PatientAvgAggregate: ["id", "doctorId", "userId"],
    PatientSumAggregate: ["id", "doctorId", "userId"],
    PatientMinAggregate: ["id", "age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "doctorId", "userId"],
    PatientMaxAggregate: ["id", "age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "doctorId", "userId"],
    AppointmentCountAggregate: ["id", "fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime", "doctorId", "patientId", "_all"],
    AppointmentAvgAggregate: ["id", "doctorId", "patientId"],
    AppointmentSumAggregate: ["id", "doctorId", "patientId"],
    AppointmentMinAggregate: ["id", "fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "details", "scheduledDate", "status", "startTime", "endTime", "doctorId", "patientId"],
    AppointmentMaxAggregate: ["id", "fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "details", "scheduledDate", "status", "startTime", "endTime", "doctorId", "patientId"],
    AvailabilitySlotCountAggregate: ["id", "startTime", "endTime", "doctorId", "_all"],
    AvailabilitySlotAvgAggregate: ["id", "doctorId"],
    AvailabilitySlotSumAggregate: ["id", "doctorId"],
    AvailabilitySlotMinAggregate: ["id", "startTime", "endTime", "doctorId"],
    AvailabilitySlotMaxAggregate: ["id", "startTime", "endTime", "doctorId"],
    UnavailabilitySlotCountAggregate: ["id", "doctorId", "startTime", "endTime", "startDate", "endDate", "reason", "isAvailable", "_all"],
    UnavailabilitySlotAvgAggregate: ["id", "doctorId"],
    UnavailabilitySlotSumAggregate: ["id", "doctorId"],
    UnavailabilitySlotMinAggregate: ["id", "doctorId", "startTime", "endTime", "startDate", "endDate", "reason", "isAvailable"],
    UnavailabilitySlotMaxAggregate: ["id", "doctorId", "startTime", "endTime", "startDate", "endDate", "reason", "isAvailable"],
    CreateManyAndReturnUser: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken"],
    CreateManyAndReturnDoctor: ["id", "userId", "name", "profilePhoto", "address", "email", "gender", "User"],
    CreateManyAndReturnPatient: ["id", "age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "doctorId", "userId", "Doctor", "User"],
    CreateManyAndReturnAppointment: ["id", "fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime", "doctorId", "patientId", "Doctor", "Patient"],
    CreateManyAndReturnAvailabilitySlot: ["id", "startTime", "endTime", "doctorId", "doctor"],
    CreateManyAndReturnUnavailabilitySlot: ["id", "doctorId", "startTime", "endTime", "startDate", "endDate", "reason", "isAvailable", "doctor"]
};
function applyOutputTypesEnhanceMap(outputTypesEnhanceMap) {
    for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
        const outputTypeName = outputTypeEnhanceMapKey;
        const typeConfig = outputTypesEnhanceMap[outputTypeName];
        const typeClass = outputTypes[outputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, outputsInfo[outputTypeName]);
    }
}
exports.applyOutputTypesEnhanceMap = applyOutputTypesEnhanceMap;
const inputsInfo = {
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken", "doctor", "patient"],
    UserOrderByWithRelationInput: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken", "doctor", "patient"],
    UserWhereUniqueInput: ["id", "email", "phoneNumber", "otp", "AND", "OR", "NOT", "name", "password", "role", "token", "tokenExpire", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken", "doctor", "patient"],
    UserOrderByWithAggregationInput: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken", "_count", "_avg", "_max", "_min", "_sum"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken"],
    DoctorWhereInput: ["AND", "OR", "NOT", "id", "userId", "name", "profilePhoto", "address", "email", "gender", "User", "patients", "appointments", "AvailabilitySlot", "UnavailabilitySlot"],
    DoctorOrderByWithRelationInput: ["id", "userId", "name", "profilePhoto", "address", "email", "gender", "User", "patients", "appointments", "AvailabilitySlot", "UnavailabilitySlot"],
    DoctorWhereUniqueInput: ["id", "userId", "AND", "OR", "NOT", "name", "profilePhoto", "address", "email", "gender", "User", "patients", "appointments", "AvailabilitySlot", "UnavailabilitySlot"],
    DoctorOrderByWithAggregationInput: ["id", "userId", "name", "profilePhoto", "address", "email", "gender", "_count", "_avg", "_max", "_min", "_sum"],
    DoctorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "name", "profilePhoto", "address", "email", "gender"],
    PatientWhereInput: ["AND", "OR", "NOT", "id", "age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "doctorId", "userId", "Doctor", "User", "appointments"],
    PatientOrderByWithRelationInput: ["id", "age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "doctorId", "userId", "Doctor", "User", "appointments"],
    PatientWhereUniqueInput: ["id", "doctorId", "userId", "AND", "OR", "NOT", "age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "Doctor", "User", "appointments"],
    PatientOrderByWithAggregationInput: ["id", "age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "doctorId", "userId", "_count", "_avg", "_max", "_min", "_sum"],
    PatientScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "doctorId", "userId"],
    AppointmentWhereInput: ["AND", "OR", "NOT", "id", "fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime", "doctorId", "patientId", "Doctor", "Patient"],
    AppointmentOrderByWithRelationInput: ["id", "fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime", "doctorId", "patientId", "Doctor", "Patient"],
    AppointmentWhereUniqueInput: ["id", "AND", "OR", "NOT", "fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime", "doctorId", "patientId", "Doctor", "Patient"],
    AppointmentOrderByWithAggregationInput: ["id", "fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime", "doctorId", "patientId", "_count", "_avg", "_max", "_min", "_sum"],
    AppointmentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime", "doctorId", "patientId"],
    AvailabilitySlotWhereInput: ["AND", "OR", "NOT", "id", "startTime", "endTime", "doctorId", "doctor"],
    AvailabilitySlotOrderByWithRelationInput: ["id", "startTime", "endTime", "doctorId", "doctor"],
    AvailabilitySlotWhereUniqueInput: ["id", "doctorId", "AND", "OR", "NOT", "startTime", "endTime", "doctor"],
    AvailabilitySlotOrderByWithAggregationInput: ["id", "startTime", "endTime", "doctorId", "_count", "_avg", "_max", "_min", "_sum"],
    AvailabilitySlotScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "startTime", "endTime", "doctorId"],
    UnavailabilitySlotWhereInput: ["AND", "OR", "NOT", "id", "doctorId", "startTime", "endTime", "startDate", "endDate", "reason", "isAvailable", "doctor"],
    UnavailabilitySlotOrderByWithRelationInput: ["id", "doctorId", "startTime", "endTime", "startDate", "endDate", "reason", "isAvailable", "doctor"],
    UnavailabilitySlotWhereUniqueInput: ["id", "doctorId", "AND", "OR", "NOT", "startTime", "endTime", "startDate", "endDate", "reason", "isAvailable", "doctor"],
    UnavailabilitySlotOrderByWithAggregationInput: ["id", "doctorId", "startTime", "endTime", "startDate", "endDate", "reason", "isAvailable", "_count", "_avg", "_max", "_min", "_sum"],
    UnavailabilitySlotScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "doctorId", "startTime", "endTime", "startDate", "endDate", "reason", "isAvailable"],
    UserCreateInput: ["name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken", "doctor", "patient"],
    UserUpdateInput: ["name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken", "doctor", "patient"],
    UserCreateManyInput: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken"],
    UserUpdateManyMutationInput: ["name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken"],
    DoctorCreateInput: ["name", "profilePhoto", "address", "email", "gender", "User", "patients", "appointments", "AvailabilitySlot", "UnavailabilitySlot"],
    DoctorUpdateInput: ["name", "profilePhoto", "address", "email", "gender", "User", "patients", "appointments", "AvailabilitySlot", "UnavailabilitySlot"],
    DoctorCreateManyInput: ["id", "userId", "name", "profilePhoto", "address", "email", "gender"],
    DoctorUpdateManyMutationInput: ["name", "profilePhoto", "address", "email", "gender"],
    PatientCreateInput: ["age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "Doctor", "User", "appointments"],
    PatientUpdateInput: ["age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "Doctor", "User", "appointments"],
    PatientCreateManyInput: ["id", "age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "doctorId", "userId"],
    PatientUpdateManyMutationInput: ["age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo"],
    AppointmentCreateInput: ["fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime", "Doctor", "Patient"],
    AppointmentUpdateInput: ["fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime", "Doctor", "Patient"],
    AppointmentCreateManyInput: ["id", "fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime", "doctorId", "patientId"],
    AppointmentUpdateManyMutationInput: ["fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime"],
    AvailabilitySlotCreateInput: ["startTime", "endTime", "doctor"],
    AvailabilitySlotUpdateInput: ["startTime", "endTime", "doctor"],
    AvailabilitySlotCreateManyInput: ["id", "startTime", "endTime", "doctorId"],
    AvailabilitySlotUpdateManyMutationInput: ["startTime", "endTime"],
    UnavailabilitySlotCreateInput: ["startTime", "endTime", "startDate", "endDate", "reason", "isAvailable", "doctor"],
    UnavailabilitySlotUpdateInput: ["startTime", "endTime", "startDate", "endDate", "reason", "isAvailable", "doctor"],
    UnavailabilitySlotCreateManyInput: ["id", "doctorId", "startTime", "endTime", "startDate", "endDate", "reason", "isAvailable"],
    UnavailabilitySlotUpdateManyMutationInput: ["startTime", "endTime", "startDate", "endDate", "reason", "isAvailable"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    EnumroleFilter: ["equals", "in", "notIn", "not"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    DoctorNullableRelationFilter: ["is", "isNot"],
    PatientNullableRelationFilter: ["is", "isNot"],
    SortOrderInput: ["sort", "nulls"],
    UserCountOrderByAggregateInput: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken"],
    UserAvgOrderByAggregateInput: ["id"],
    UserMaxOrderByAggregateInput: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken"],
    UserMinOrderByAggregateInput: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken"],
    UserSumOrderByAggregateInput: ["id"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    EnumroleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    EnumgenderFilter: ["equals", "in", "notIn", "not"],
    UserRelationFilter: ["is", "isNot"],
    PatientListRelationFilter: ["every", "some", "none"],
    AppointmentListRelationFilter: ["every", "some", "none"],
    AvailabilitySlotListRelationFilter: ["every", "some", "none"],
    UnavailabilitySlotListRelationFilter: ["every", "some", "none"],
    PatientOrderByRelationAggregateInput: ["_count"],
    AppointmentOrderByRelationAggregateInput: ["_count"],
    AvailabilitySlotOrderByRelationAggregateInput: ["_count"],
    UnavailabilitySlotOrderByRelationAggregateInput: ["_count"],
    DoctorCountOrderByAggregateInput: ["id", "userId", "name", "profilePhoto", "address", "email", "gender"],
    DoctorAvgOrderByAggregateInput: ["id", "userId"],
    DoctorMaxOrderByAggregateInput: ["id", "userId", "name", "profilePhoto", "address", "email", "gender"],
    DoctorMinOrderByAggregateInput: ["id", "userId", "name", "profilePhoto", "address", "email", "gender"],
    DoctorSumOrderByAggregateInput: ["id", "userId"],
    EnumgenderWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    PatientCountOrderByAggregateInput: ["id", "age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "doctorId", "userId"],
    PatientAvgOrderByAggregateInput: ["id", "doctorId", "userId"],
    PatientMaxOrderByAggregateInput: ["id", "age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "doctorId", "userId"],
    PatientMinOrderByAggregateInput: ["id", "age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "doctorId", "userId"],
    PatientSumOrderByAggregateInput: ["id", "doctorId", "userId"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
    EnumAppointmentStatusNullableFilter: ["equals", "in", "notIn", "not"],
    DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AppointmentCountOrderByAggregateInput: ["id", "fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime", "doctorId", "patientId"],
    AppointmentAvgOrderByAggregateInput: ["id", "doctorId", "patientId"],
    AppointmentMaxOrderByAggregateInput: ["id", "fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "details", "scheduledDate", "status", "startTime", "endTime", "doctorId", "patientId"],
    AppointmentMinOrderByAggregateInput: ["id", "fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "details", "scheduledDate", "status", "startTime", "endTime", "doctorId", "patientId"],
    AppointmentSumOrderByAggregateInput: ["id", "doctorId", "patientId"],
    EnumAppointmentStatusNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    DoctorRelationFilter: ["is", "isNot"],
    AvailabilitySlotCountOrderByAggregateInput: ["id", "startTime", "endTime", "doctorId"],
    AvailabilitySlotAvgOrderByAggregateInput: ["id", "doctorId"],
    AvailabilitySlotMaxOrderByAggregateInput: ["id", "startTime", "endTime", "doctorId"],
    AvailabilitySlotMinOrderByAggregateInput: ["id", "startTime", "endTime", "doctorId"],
    AvailabilitySlotSumOrderByAggregateInput: ["id", "doctorId"],
    BoolNullableFilter: ["equals", "not"],
    UnavailabilitySlotCountOrderByAggregateInput: ["id", "doctorId", "startTime", "endTime", "startDate", "endDate", "reason", "isAvailable"],
    UnavailabilitySlotAvgOrderByAggregateInput: ["id", "doctorId"],
    UnavailabilitySlotMaxOrderByAggregateInput: ["id", "doctorId", "startTime", "endTime", "startDate", "endDate", "reason", "isAvailable"],
    UnavailabilitySlotMinOrderByAggregateInput: ["id", "doctorId", "startTime", "endTime", "startDate", "endDate", "reason", "isAvailable"],
    UnavailabilitySlotSumOrderByAggregateInput: ["id", "doctorId"],
    BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    DoctorCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
    PatientCreateNestedOneWithoutUserInput: ["create", "connectOrCreate", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    EnumroleFieldUpdateOperationsInput: ["set"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    DoctorUpdateOneWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    PatientUpdateOneWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    UserCreateNestedOneWithoutDoctorInput: ["create", "connectOrCreate", "connect"],
    PatientCreateNestedManyWithoutDoctorInput: ["create", "connectOrCreate", "createMany", "connect"],
    AppointmentCreateNestedManyWithoutDoctorInput: ["create", "connectOrCreate", "createMany", "connect"],
    AvailabilitySlotCreateNestedManyWithoutDoctorInput: ["create", "connectOrCreate", "createMany", "connect"],
    UnavailabilitySlotCreateNestedManyWithoutDoctorInput: ["create", "connectOrCreate", "createMany", "connect"],
    EnumgenderFieldUpdateOperationsInput: ["set"],
    UserUpdateOneRequiredWithoutDoctorNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    PatientUpdateManyWithoutDoctorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    AppointmentUpdateManyWithoutDoctorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    AvailabilitySlotUpdateManyWithoutDoctorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    UnavailabilitySlotUpdateManyWithoutDoctorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    DoctorCreateNestedOneWithoutPatientsInput: ["create", "connectOrCreate", "connect"],
    UserCreateNestedOneWithoutPatientInput: ["create", "connectOrCreate", "connect"],
    AppointmentCreateNestedManyWithoutPatientInput: ["create", "connectOrCreate", "createMany", "connect"],
    DoctorUpdateOneWithoutPatientsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    UserUpdateOneRequiredWithoutPatientNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    AppointmentUpdateManyWithoutPatientNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    AppointmentCreatepresciptionsInput: ["set"],
    DoctorCreateNestedOneWithoutAppointmentsInput: ["create", "connectOrCreate", "connect"],
    PatientCreateNestedOneWithoutAppointmentsInput: ["create", "connectOrCreate", "connect"],
    AppointmentUpdatepresciptionsInput: ["set", "push"],
    NullableEnumAppointmentStatusFieldUpdateOperationsInput: ["set"],
    DateTimeFieldUpdateOperationsInput: ["set"],
    DoctorUpdateOneWithoutAppointmentsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    PatientUpdateOneWithoutAppointmentsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    DoctorCreateNestedOneWithoutAvailabilitySlotInput: ["create", "connectOrCreate", "connect"],
    DoctorUpdateOneRequiredWithoutAvailabilitySlotNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    DoctorCreateNestedOneWithoutUnavailabilitySlotInput: ["create", "connectOrCreate", "connect"],
    NullableBoolFieldUpdateOperationsInput: ["set"],
    DoctorUpdateOneRequiredWithoutUnavailabilitySlotNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
    NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
    NestedEnumroleFilter: ["equals", "in", "notIn", "not"],
    NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
    NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumroleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedEnumgenderFilter: ["equals", "in", "notIn", "not"],
    NestedEnumgenderWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumAppointmentStatusNullableFilter: ["equals", "in", "notIn", "not"],
    NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumAppointmentStatusNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    NestedBoolNullableFilter: ["equals", "not"],
    NestedBoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
    DoctorCreateWithoutUserInput: ["name", "profilePhoto", "address", "email", "gender", "patients", "appointments", "AvailabilitySlot", "UnavailabilitySlot"],
    DoctorCreateOrConnectWithoutUserInput: ["where", "create"],
    PatientCreateWithoutUserInput: ["age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "Doctor", "appointments"],
    PatientCreateOrConnectWithoutUserInput: ["where", "create"],
    DoctorUpsertWithoutUserInput: ["update", "create", "where"],
    DoctorUpdateToOneWithWhereWithoutUserInput: ["where", "data"],
    DoctorUpdateWithoutUserInput: ["name", "profilePhoto", "address", "email", "gender", "patients", "appointments", "AvailabilitySlot", "UnavailabilitySlot"],
    PatientUpsertWithoutUserInput: ["update", "create", "where"],
    PatientUpdateToOneWithWhereWithoutUserInput: ["where", "data"],
    PatientUpdateWithoutUserInput: ["age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "Doctor", "appointments"],
    UserCreateWithoutDoctorInput: ["name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken", "patient"],
    UserCreateOrConnectWithoutDoctorInput: ["where", "create"],
    PatientCreateWithoutDoctorInput: ["age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "User", "appointments"],
    PatientCreateOrConnectWithoutDoctorInput: ["where", "create"],
    PatientCreateManyDoctorInputEnvelope: ["data", "skipDuplicates"],
    AppointmentCreateWithoutDoctorInput: ["fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime", "Patient"],
    AppointmentCreateOrConnectWithoutDoctorInput: ["where", "create"],
    AppointmentCreateManyDoctorInputEnvelope: ["data", "skipDuplicates"],
    AvailabilitySlotCreateWithoutDoctorInput: ["startTime", "endTime"],
    AvailabilitySlotCreateOrConnectWithoutDoctorInput: ["where", "create"],
    AvailabilitySlotCreateManyDoctorInputEnvelope: ["data", "skipDuplicates"],
    UnavailabilitySlotCreateWithoutDoctorInput: ["startTime", "endTime", "startDate", "endDate", "reason", "isAvailable"],
    UnavailabilitySlotCreateOrConnectWithoutDoctorInput: ["where", "create"],
    UnavailabilitySlotCreateManyDoctorInputEnvelope: ["data", "skipDuplicates"],
    UserUpsertWithoutDoctorInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutDoctorInput: ["where", "data"],
    UserUpdateWithoutDoctorInput: ["name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken", "patient"],
    PatientUpsertWithWhereUniqueWithoutDoctorInput: ["where", "update", "create"],
    PatientUpdateWithWhereUniqueWithoutDoctorInput: ["where", "data"],
    PatientUpdateManyWithWhereWithoutDoctorInput: ["where", "data"],
    PatientScalarWhereInput: ["AND", "OR", "NOT", "id", "age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "doctorId", "userId"],
    AppointmentUpsertWithWhereUniqueWithoutDoctorInput: ["where", "update", "create"],
    AppointmentUpdateWithWhereUniqueWithoutDoctorInput: ["where", "data"],
    AppointmentUpdateManyWithWhereWithoutDoctorInput: ["where", "data"],
    AppointmentScalarWhereInput: ["AND", "OR", "NOT", "id", "fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime", "doctorId", "patientId"],
    AvailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput: ["where", "update", "create"],
    AvailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput: ["where", "data"],
    AvailabilitySlotUpdateManyWithWhereWithoutDoctorInput: ["where", "data"],
    AvailabilitySlotScalarWhereInput: ["AND", "OR", "NOT", "id", "startTime", "endTime", "doctorId"],
    UnavailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput: ["where", "update", "create"],
    UnavailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput: ["where", "data"],
    UnavailabilitySlotUpdateManyWithWhereWithoutDoctorInput: ["where", "data"],
    UnavailabilitySlotScalarWhereInput: ["AND", "OR", "NOT", "id", "doctorId", "startTime", "endTime", "startDate", "endDate", "reason", "isAvailable"],
    DoctorCreateWithoutPatientsInput: ["name", "profilePhoto", "address", "email", "gender", "User", "appointments", "AvailabilitySlot", "UnavailabilitySlot"],
    DoctorCreateOrConnectWithoutPatientsInput: ["where", "create"],
    UserCreateWithoutPatientInput: ["name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken", "doctor"],
    UserCreateOrConnectWithoutPatientInput: ["where", "create"],
    AppointmentCreateWithoutPatientInput: ["fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime", "Doctor"],
    AppointmentCreateOrConnectWithoutPatientInput: ["where", "create"],
    AppointmentCreateManyPatientInputEnvelope: ["data", "skipDuplicates"],
    DoctorUpsertWithoutPatientsInput: ["update", "create", "where"],
    DoctorUpdateToOneWithWhereWithoutPatientsInput: ["where", "data"],
    DoctorUpdateWithoutPatientsInput: ["name", "profilePhoto", "address", "email", "gender", "User", "appointments", "AvailabilitySlot", "UnavailabilitySlot"],
    UserUpsertWithoutPatientInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutPatientInput: ["where", "data"],
    UserUpdateWithoutPatientInput: ["name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "refreshToken", "doctor"],
    AppointmentUpsertWithWhereUniqueWithoutPatientInput: ["where", "update", "create"],
    AppointmentUpdateWithWhereUniqueWithoutPatientInput: ["where", "data"],
    AppointmentUpdateManyWithWhereWithoutPatientInput: ["where", "data"],
    DoctorCreateWithoutAppointmentsInput: ["name", "profilePhoto", "address", "email", "gender", "User", "patients", "AvailabilitySlot", "UnavailabilitySlot"],
    DoctorCreateOrConnectWithoutAppointmentsInput: ["where", "create"],
    PatientCreateWithoutAppointmentsInput: ["age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "Doctor", "User"],
    PatientCreateOrConnectWithoutAppointmentsInput: ["where", "create"],
    DoctorUpsertWithoutAppointmentsInput: ["update", "create", "where"],
    DoctorUpdateToOneWithWhereWithoutAppointmentsInput: ["where", "data"],
    DoctorUpdateWithoutAppointmentsInput: ["name", "profilePhoto", "address", "email", "gender", "User", "patients", "AvailabilitySlot", "UnavailabilitySlot"],
    PatientUpsertWithoutAppointmentsInput: ["update", "create", "where"],
    PatientUpdateToOneWithWhereWithoutAppointmentsInput: ["where", "data"],
    PatientUpdateWithoutAppointmentsInput: ["age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "Doctor", "User"],
    DoctorCreateWithoutAvailabilitySlotInput: ["name", "profilePhoto", "address", "email", "gender", "User", "patients", "appointments", "UnavailabilitySlot"],
    DoctorCreateOrConnectWithoutAvailabilitySlotInput: ["where", "create"],
    DoctorUpsertWithoutAvailabilitySlotInput: ["update", "create", "where"],
    DoctorUpdateToOneWithWhereWithoutAvailabilitySlotInput: ["where", "data"],
    DoctorUpdateWithoutAvailabilitySlotInput: ["name", "profilePhoto", "address", "email", "gender", "User", "patients", "appointments", "UnavailabilitySlot"],
    DoctorCreateWithoutUnavailabilitySlotInput: ["name", "profilePhoto", "address", "email", "gender", "User", "patients", "appointments", "AvailabilitySlot"],
    DoctorCreateOrConnectWithoutUnavailabilitySlotInput: ["where", "create"],
    DoctorUpsertWithoutUnavailabilitySlotInput: ["update", "create", "where"],
    DoctorUpdateToOneWithWhereWithoutUnavailabilitySlotInput: ["where", "data"],
    DoctorUpdateWithoutUnavailabilitySlotInput: ["name", "profilePhoto", "address", "email", "gender", "User", "patients", "appointments", "AvailabilitySlot"],
    PatientCreateManyDoctorInput: ["id", "age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "userId"],
    AppointmentCreateManyDoctorInput: ["id", "fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime", "patientId"],
    AvailabilitySlotCreateManyDoctorInput: ["id", "startTime", "endTime"],
    UnavailabilitySlotCreateManyDoctorInput: ["id", "startTime", "endTime", "startDate", "endDate", "reason", "isAvailable"],
    PatientUpdateWithoutDoctorInput: ["age", "fullName", "gender", "address", "email", "profilePicture", "phoneNo", "User", "appointments"],
    AppointmentUpdateWithoutDoctorInput: ["fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime", "Patient"],
    AvailabilitySlotUpdateWithoutDoctorInput: ["startTime", "endTime"],
    UnavailabilitySlotUpdateWithoutDoctorInput: ["startTime", "endTime", "startDate", "endDate", "reason", "isAvailable"],
    AppointmentCreateManyPatientInput: ["id", "fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime", "doctorId"],
    AppointmentUpdateWithoutPatientInput: ["fullName", "age", "gender", "phoneNo", "address", "email", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "startTime", "endTime", "Doctor"]
};
function applyInputTypesEnhanceMap(inputTypesEnhanceMap) {
    for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
        const inputTypeName = inputTypeEnhanceMapKey;
        const typeConfig = inputTypesEnhanceMap[inputTypeName];
        const typeClass = inputTypes[inputTypeName];
        const typeTarget = typeClass.prototype;
        applyTypeClassEnhanceConfig(typeConfig, typeClass, typeTarget, inputsInfo[inputTypeName]);
    }
}
exports.applyInputTypesEnhanceMap = applyInputTypesEnhanceMap;
