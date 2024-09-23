import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

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

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "createManyAndReturn", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Appointment: relationResolvers.AppointmentRelationsResolver
};
const relationResolversInfo = {
  User: ["appointment"],
  Appointment: ["User"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
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

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

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

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

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

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

