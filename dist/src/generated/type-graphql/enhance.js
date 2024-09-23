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
    Appointment: crudResolvers.AppointmentCrudResolver
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
    }
};
const crudResolversInfo = {
    User: ["aggregateUser", "createManyUser", "createManyAndReturnUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
    Appointment: ["aggregateAppointment", "createManyAppointment", "createManyAndReturnAppointment", "createOneAppointment", "deleteManyAppointment", "deleteOneAppointment", "findFirstAppointment", "findFirstAppointmentOrThrow", "appointments", "appointment", "getAppointment", "groupByAppointment", "updateManyAppointment", "updateOneAppointment", "upsertOneAppointment"]
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
    UpsertOneAppointmentArgs: ["where", "create", "update"]
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
    Appointment: relationResolvers.AppointmentRelationsResolver
};
const relationResolversInfo = {
    User: ["appointment"],
    Appointment: ["User"]
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
    User: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "proflePicture"],
    Appointment: ["id", "userId", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions"]
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
    UserGroupBy: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "proflePicture", "_count", "_avg", "_sum", "_min", "_max"],
    AggregateAppointment: ["_count", "_avg", "_sum", "_min", "_max"],
    AppointmentGroupBy: ["id", "userId", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "_count", "_avg", "_sum", "_min", "_max"],
    AffectedRowsOutput: ["count"],
    UserCount: ["appointment"],
    UserCountAggregate: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "proflePicture", "_all"],
    UserAvgAggregate: ["id"],
    UserSumAggregate: ["id"],
    UserMinAggregate: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "proflePicture"],
    UserMaxAggregate: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "proflePicture"],
    AppointmentCountAggregate: ["id", "userId", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "_all"],
    AppointmentAvgAggregate: ["id", "userId"],
    AppointmentSumAggregate: ["id", "userId"],
    AppointmentMinAggregate: ["id", "userId", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory"],
    AppointmentMaxAggregate: ["id", "userId", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory"],
    CreateManyAndReturnUser: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "proflePicture"],
    CreateManyAndReturnAppointment: ["id", "userId", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "User"]
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
    UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "proflePicture", "appointment"],
    UserOrderByWithRelationInput: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "proflePicture", "appointment"],
    UserWhereUniqueInput: ["id", "email", "phoneNumber", "AND", "OR", "NOT", "name", "password", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "proflePicture", "appointment"],
    UserOrderByWithAggregationInput: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "proflePicture", "_count", "_avg", "_max", "_min", "_sum"],
    UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "proflePicture"],
    AppointmentWhereInput: ["AND", "OR", "NOT", "id", "userId", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "User"],
    AppointmentOrderByWithRelationInput: ["id", "userId", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "User"],
    AppointmentWhereUniqueInput: ["id", "AND", "OR", "NOT", "userId", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "User"],
    AppointmentOrderByWithAggregationInput: ["id", "userId", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "_count", "_avg", "_max", "_min", "_sum"],
    AppointmentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions"],
    UserCreateInput: ["name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "proflePicture", "appointment"],
    UserUpdateInput: ["name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "proflePicture", "appointment"],
    UserCreateManyInput: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "proflePicture"],
    UserUpdateManyMutationInput: ["name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "proflePicture"],
    AppointmentCreateInput: ["fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "User"],
    AppointmentUpdateInput: ["fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "User"],
    AppointmentCreateManyInput: ["id", "userId", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions"],
    AppointmentUpdateManyMutationInput: ["fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions"],
    IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
    EnumroleFilter: ["equals", "in", "notIn", "not"],
    DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    AppointmentListRelationFilter: ["every", "some", "none"],
    SortOrderInput: ["sort", "nulls"],
    AppointmentOrderByRelationAggregateInput: ["_count"],
    UserCountOrderByAggregateInput: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "proflePicture"],
    UserAvgOrderByAggregateInput: ["id"],
    UserMaxOrderByAggregateInput: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "proflePicture"],
    UserMinOrderByAggregateInput: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "proflePicture"],
    UserSumOrderByAggregateInput: ["id"],
    IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
    EnumroleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
    IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    EnumgenderNullableFilter: ["equals", "in", "notIn", "not"],
    StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
    UserNullableRelationFilter: ["is", "isNot"],
    AppointmentCountOrderByAggregateInput: ["id", "userId", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions"],
    AppointmentAvgOrderByAggregateInput: ["id", "userId"],
    AppointmentMaxOrderByAggregateInput: ["id", "userId", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory"],
    AppointmentMinOrderByAggregateInput: ["id", "userId", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory"],
    AppointmentSumOrderByAggregateInput: ["id", "userId"],
    IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    EnumgenderNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    AppointmentCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
    StringFieldUpdateOperationsInput: ["set"],
    NullableStringFieldUpdateOperationsInput: ["set"],
    EnumroleFieldUpdateOperationsInput: ["set"],
    NullableDateTimeFieldUpdateOperationsInput: ["set"],
    AppointmentUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
    IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
    AppointmentCreatepresciptionsInput: ["set"],
    UserCreateNestedOneWithoutAppointmentInput: ["create", "connectOrCreate", "connect"],
    NullableEnumgenderFieldUpdateOperationsInput: ["set"],
    AppointmentUpdatepresciptionsInput: ["set", "push"],
    UserUpdateOneWithoutAppointmentNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
    NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
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
    NestedEnumgenderNullableFilter: ["equals", "in", "notIn", "not"],
    NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
    NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
    NestedEnumgenderNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
    AppointmentCreateWithoutUserInput: ["fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions"],
    AppointmentCreateOrConnectWithoutUserInput: ["where", "create"],
    AppointmentCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
    AppointmentUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
    AppointmentUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
    AppointmentUpdateManyWithWhereWithoutUserInput: ["where", "data"],
    AppointmentScalarWhereInput: ["AND", "OR", "NOT", "id", "userId", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions"],
    UserCreateWithoutAppointmentInput: ["name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "proflePicture"],
    UserCreateOrConnectWithoutAppointmentInput: ["where", "create"],
    UserUpsertWithoutAppointmentInput: ["update", "create", "where"],
    UserUpdateToOneWithWhereWithoutAppointmentInput: ["where", "data"],
    UserUpdateWithoutAppointmentInput: ["name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "proflePicture"],
    AppointmentCreateManyUserInput: ["id", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions"],
    AppointmentUpdateWithoutUserInput: ["fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions"]
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
