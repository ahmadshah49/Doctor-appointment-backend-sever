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
  Doctor: crudResolvers.DoctorCrudResolver,
  Patient: crudResolvers.PatientCrudResolver,
  Appointment: crudResolvers.AppointmentCrudResolver,
  AvailabilitySlot: crudResolvers.AvailabilitySlotCrudResolver
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
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createManyAndReturnUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Doctor: ["aggregateDoctor", "createManyDoctor", "createManyAndReturnDoctor", "createOneDoctor", "deleteManyDoctor", "deleteOneDoctor", "findFirstDoctor", "findFirstDoctorOrThrow", "doctors", "doctor", "getDoctor", "groupByDoctor", "updateManyDoctor", "updateOneDoctor", "upsertOneDoctor"],
  Patient: ["aggregatePatient", "createManyPatient", "createManyAndReturnPatient", "createOnePatient", "deleteManyPatient", "deleteOnePatient", "findFirstPatient", "findFirstPatientOrThrow", "patients", "patient", "getPatient", "groupByPatient", "updateManyPatient", "updateOnePatient", "upsertOnePatient"],
  Appointment: ["aggregateAppointment", "createManyAppointment", "createManyAndReturnAppointment", "createOneAppointment", "deleteManyAppointment", "deleteOneAppointment", "findFirstAppointment", "findFirstAppointmentOrThrow", "appointments", "appointment", "getAppointment", "groupByAppointment", "updateManyAppointment", "updateOneAppointment", "upsertOneAppointment"],
  AvailabilitySlot: ["aggregateAvailabilitySlot", "createManyAvailabilitySlot", "createManyAndReturnAvailabilitySlot", "createOneAvailabilitySlot", "deleteManyAvailabilitySlot", "deleteOneAvailabilitySlot", "findFirstAvailabilitySlot", "findFirstAvailabilitySlotOrThrow", "availabilitySlots", "availabilitySlot", "getAvailabilitySlot", "groupByAvailabilitySlot", "updateManyAvailabilitySlot", "updateOneAvailabilitySlot", "upsertOneAvailabilitySlot"]
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
  UpsertOneAvailabilitySlotArgs: ["where", "create", "update"]
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
  Doctor: relationResolvers.DoctorRelationsResolver,
  Patient: relationResolvers.PatientRelationsResolver,
  Appointment: relationResolvers.AppointmentRelationsResolver,
  AvailabilitySlot: relationResolvers.AvailabilitySlotRelationsResolver
};
const relationResolversInfo = {
  User: ["doctor", "patient"],
  Doctor: ["User", "patients", "appointments", "AvailabilitySlot"],
  Patient: ["Doctor", "User", "appointments"],
  Appointment: ["Doctor", "Patient"],
  AvailabilitySlot: ["doctor"]
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
  User: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture"],
  Doctor: ["id", "userId", "name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender"],
  Patient: ["id", "age", "fullName", "gender", "address", "profilePicture", "phoneNo", "doctorId", "userId"],
  Appointment: ["id", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "doctorId", "patientId"],
  AvailabilitySlot: ["id", "doctorId", "day", "startTime", "endTime", "isBooked"]
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
  UserGroupBy: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateDoctor: ["_count", "_avg", "_sum", "_min", "_max"],
  DoctorGroupBy: ["id", "userId", "name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePatient: ["_count", "_avg", "_sum", "_min", "_max"],
  PatientGroupBy: ["id", "age", "fullName", "gender", "address", "profilePicture", "phoneNo", "doctorId", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAppointment: ["_count", "_avg", "_sum", "_min", "_max"],
  AppointmentGroupBy: ["id", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "doctorId", "patientId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAvailabilitySlot: ["_count", "_avg", "_sum", "_min", "_max"],
  AvailabilitySlotGroupBy: ["id", "doctorId", "day", "startTime", "endTime", "isBooked", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCountAggregate: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture"],
  UserMaxAggregate: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture"],
  DoctorCount: ["patients", "appointments", "AvailabilitySlot"],
  DoctorCountAggregate: ["id", "userId", "name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender", "_all"],
  DoctorAvgAggregate: ["id", "userId"],
  DoctorSumAggregate: ["id", "userId"],
  DoctorMinAggregate: ["id", "userId", "name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender"],
  DoctorMaxAggregate: ["id", "userId", "name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender"],
  PatientCount: ["appointments"],
  PatientCountAggregate: ["id", "age", "fullName", "gender", "address", "profilePicture", "phoneNo", "doctorId", "userId", "_all"],
  PatientAvgAggregate: ["id", "doctorId", "userId"],
  PatientSumAggregate: ["id", "doctorId", "userId"],
  PatientMinAggregate: ["id", "age", "fullName", "gender", "address", "profilePicture", "phoneNo", "doctorId", "userId"],
  PatientMaxAggregate: ["id", "age", "fullName", "gender", "address", "profilePicture", "phoneNo", "doctorId", "userId"],
  AppointmentCountAggregate: ["id", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "doctorId", "patientId", "_all"],
  AppointmentAvgAggregate: ["id", "doctorId", "patientId"],
  AppointmentSumAggregate: ["id", "doctorId", "patientId"],
  AppointmentMinAggregate: ["id", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "details", "scheduledDate", "status", "doctorId", "patientId"],
  AppointmentMaxAggregate: ["id", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "details", "scheduledDate", "status", "doctorId", "patientId"],
  AvailabilitySlotCountAggregate: ["id", "doctorId", "day", "startTime", "endTime", "isBooked", "_all"],
  AvailabilitySlotAvgAggregate: ["id", "doctorId"],
  AvailabilitySlotSumAggregate: ["id", "doctorId"],
  AvailabilitySlotMinAggregate: ["id", "doctorId", "day", "startTime", "endTime", "isBooked"],
  AvailabilitySlotMaxAggregate: ["id", "doctorId", "day", "startTime", "endTime", "isBooked"],
  CreateManyAndReturnUser: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture"],
  CreateManyAndReturnDoctor: ["id", "userId", "name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender", "User"],
  CreateManyAndReturnPatient: ["id", "age", "fullName", "gender", "address", "profilePicture", "phoneNo", "doctorId", "userId", "Doctor", "User"],
  CreateManyAndReturnAppointment: ["id", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "doctorId", "patientId", "Doctor", "Patient"],
  CreateManyAndReturnAvailabilitySlot: ["id", "doctorId", "day", "startTime", "endTime", "isBooked", "doctor"]
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
  UserWhereInput: ["AND", "OR", "NOT", "id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "doctor", "patient"],
  UserOrderByWithRelationInput: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "doctor", "patient"],
  UserWhereUniqueInput: ["id", "email", "phoneNumber", "AND", "OR", "NOT", "name", "password", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "doctor", "patient"],
  UserOrderByWithAggregationInput: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture"],
  DoctorWhereInput: ["AND", "OR", "NOT", "id", "userId", "name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender", "User", "patients", "appointments", "AvailabilitySlot"],
  DoctorOrderByWithRelationInput: ["id", "userId", "name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender", "User", "patients", "appointments", "AvailabilitySlot"],
  DoctorWhereUniqueInput: ["id", "userId", "AND", "OR", "NOT", "name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender", "User", "patients", "appointments", "AvailabilitySlot"],
  DoctorOrderByWithAggregationInput: ["id", "userId", "name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender", "_count", "_avg", "_max", "_min", "_sum"],
  DoctorScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "userId", "name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender"],
  PatientWhereInput: ["AND", "OR", "NOT", "id", "age", "fullName", "gender", "address", "profilePicture", "phoneNo", "doctorId", "userId", "Doctor", "User", "appointments"],
  PatientOrderByWithRelationInput: ["id", "age", "fullName", "gender", "address", "profilePicture", "phoneNo", "doctorId", "userId", "Doctor", "User", "appointments"],
  PatientWhereUniqueInput: ["id", "doctorId", "userId", "AND", "OR", "NOT", "age", "fullName", "gender", "address", "profilePicture", "phoneNo", "Doctor", "User", "appointments"],
  PatientOrderByWithAggregationInput: ["id", "age", "fullName", "gender", "address", "profilePicture", "phoneNo", "doctorId", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  PatientScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "age", "fullName", "gender", "address", "profilePicture", "phoneNo", "doctorId", "userId"],
  AppointmentWhereInput: ["AND", "OR", "NOT", "id", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "doctorId", "patientId", "Doctor", "Patient"],
  AppointmentOrderByWithRelationInput: ["id", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "doctorId", "patientId", "Doctor", "Patient"],
  AppointmentWhereUniqueInput: ["id", "AND", "OR", "NOT", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "doctorId", "patientId", "Doctor", "Patient"],
  AppointmentOrderByWithAggregationInput: ["id", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "doctorId", "patientId", "_count", "_avg", "_max", "_min", "_sum"],
  AppointmentScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "doctorId", "patientId"],
  AvailabilitySlotWhereInput: ["AND", "OR", "NOT", "id", "doctorId", "day", "startTime", "endTime", "isBooked", "doctor"],
  AvailabilitySlotOrderByWithRelationInput: ["id", "doctorId", "day", "startTime", "endTime", "isBooked", "doctor"],
  AvailabilitySlotWhereUniqueInput: ["id", "AND", "OR", "NOT", "doctorId", "day", "startTime", "endTime", "isBooked", "doctor"],
  AvailabilitySlotOrderByWithAggregationInput: ["id", "doctorId", "day", "startTime", "endTime", "isBooked", "_count", "_avg", "_max", "_min", "_sum"],
  AvailabilitySlotScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "doctorId", "day", "startTime", "endTime", "isBooked"],
  UserCreateInput: ["name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "doctor", "patient"],
  UserUpdateInput: ["name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "doctor", "patient"],
  UserCreateManyInput: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture"],
  UserUpdateManyMutationInput: ["name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture"],
  DoctorCreateInput: ["name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender", "User", "patients", "appointments", "AvailabilitySlot"],
  DoctorUpdateInput: ["name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender", "User", "patients", "appointments", "AvailabilitySlot"],
  DoctorCreateManyInput: ["id", "userId", "name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender"],
  DoctorUpdateManyMutationInput: ["name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender"],
  PatientCreateInput: ["age", "fullName", "gender", "address", "profilePicture", "phoneNo", "Doctor", "User", "appointments"],
  PatientUpdateInput: ["age", "fullName", "gender", "address", "profilePicture", "phoneNo", "Doctor", "User", "appointments"],
  PatientCreateManyInput: ["id", "age", "fullName", "gender", "address", "profilePicture", "phoneNo", "doctorId", "userId"],
  PatientUpdateManyMutationInput: ["age", "fullName", "gender", "address", "profilePicture", "phoneNo"],
  AppointmentCreateInput: ["fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "Doctor", "Patient"],
  AppointmentUpdateInput: ["fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "Doctor", "Patient"],
  AppointmentCreateManyInput: ["id", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "doctorId", "patientId"],
  AppointmentUpdateManyMutationInput: ["fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status"],
  AvailabilitySlotCreateInput: ["day", "startTime", "endTime", "isBooked", "doctor"],
  AvailabilitySlotUpdateInput: ["day", "startTime", "endTime", "isBooked", "doctor"],
  AvailabilitySlotCreateManyInput: ["id", "doctorId", "day", "startTime", "endTime", "isBooked"],
  AvailabilitySlotUpdateManyMutationInput: ["day", "startTime", "endTime", "isBooked"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumroleFilter: ["equals", "in", "notIn", "not"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  DoctorNullableRelationFilter: ["is", "isNot"],
  PatientNullableRelationFilter: ["is", "isNot"],
  SortOrderInput: ["sort", "nulls"],
  UserCountOrderByAggregateInput: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture"],
  UserMinOrderByAggregateInput: ["id", "name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture"],
  UserSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumroleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  BoolNullableFilter: ["equals", "not"],
  EnumgenderFilter: ["equals", "in", "notIn", "not"],
  UserRelationFilter: ["is", "isNot"],
  PatientListRelationFilter: ["every", "some", "none"],
  AppointmentListRelationFilter: ["every", "some", "none"],
  AvailabilitySlotListRelationFilter: ["every", "some", "none"],
  PatientOrderByRelationAggregateInput: ["_count"],
  AppointmentOrderByRelationAggregateInput: ["_count"],
  AvailabilitySlotOrderByRelationAggregateInput: ["_count"],
  DoctorCountOrderByAggregateInput: ["id", "userId", "name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender"],
  DoctorAvgOrderByAggregateInput: ["id", "userId"],
  DoctorMaxOrderByAggregateInput: ["id", "userId", "name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender"],
  DoctorMinOrderByAggregateInput: ["id", "userId", "name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender"],
  DoctorSumOrderByAggregateInput: ["id", "userId"],
  BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  EnumgenderWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PatientCountOrderByAggregateInput: ["id", "age", "fullName", "gender", "address", "profilePicture", "phoneNo", "doctorId", "userId"],
  PatientAvgOrderByAggregateInput: ["id", "doctorId", "userId"],
  PatientMaxOrderByAggregateInput: ["id", "age", "fullName", "gender", "address", "profilePicture", "phoneNo", "doctorId", "userId"],
  PatientMinOrderByAggregateInput: ["id", "age", "fullName", "gender", "address", "profilePicture", "phoneNo", "doctorId", "userId"],
  PatientSumOrderByAggregateInput: ["id", "doctorId", "userId"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  EnumgenderNullableFilter: ["equals", "in", "notIn", "not"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  EnumAppointmentStatusNullableFilter: ["equals", "in", "notIn", "not"],
  AppointmentCountOrderByAggregateInput: ["id", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "doctorId", "patientId"],
  AppointmentAvgOrderByAggregateInput: ["id", "doctorId", "patientId"],
  AppointmentMaxOrderByAggregateInput: ["id", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "details", "scheduledDate", "status", "doctorId", "patientId"],
  AppointmentMinOrderByAggregateInput: ["id", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "details", "scheduledDate", "status", "doctorId", "patientId"],
  AppointmentSumOrderByAggregateInput: ["id", "doctorId", "patientId"],
  EnumgenderNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumAppointmentStatusNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  BoolFilter: ["equals", "not"],
  DoctorRelationFilter: ["is", "isNot"],
  AvailabilitySlotCountOrderByAggregateInput: ["id", "doctorId", "day", "startTime", "endTime", "isBooked"],
  AvailabilitySlotAvgOrderByAggregateInput: ["id", "doctorId"],
  AvailabilitySlotMaxOrderByAggregateInput: ["id", "doctorId", "day", "startTime", "endTime", "isBooked"],
  AvailabilitySlotMinOrderByAggregateInput: ["id", "doctorId", "day", "startTime", "endTime", "isBooked"],
  AvailabilitySlotSumOrderByAggregateInput: ["id", "doctorId"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
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
  NullableBoolFieldUpdateOperationsInput: ["set"],
  EnumgenderFieldUpdateOperationsInput: ["set"],
  UserUpdateOneRequiredWithoutDoctorNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PatientUpdateManyWithoutDoctorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AppointmentUpdateManyWithoutDoctorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AvailabilitySlotUpdateManyWithoutDoctorNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
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
  NullableEnumgenderFieldUpdateOperationsInput: ["set"],
  AppointmentUpdatepresciptionsInput: ["set", "push"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  NullableEnumAppointmentStatusFieldUpdateOperationsInput: ["set"],
  DoctorUpdateOneWithoutAppointmentsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  PatientUpdateOneWithoutAppointmentsNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  DoctorCreateNestedOneWithoutAvailabilitySlotInput: ["create", "connectOrCreate", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  DoctorUpdateOneRequiredWithoutAvailabilitySlotNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
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
  NestedBoolNullableFilter: ["equals", "not"],
  NestedEnumgenderFilter: ["equals", "in", "notIn", "not"],
  NestedBoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedEnumgenderWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumgenderNullableFilter: ["equals", "in", "notIn", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedEnumAppointmentStatusNullableFilter: ["equals", "in", "notIn", "not"],
  NestedEnumgenderNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedEnumAppointmentStatusNullableWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedBoolFilter: ["equals", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  DoctorCreateWithoutUserInput: ["name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender", "patients", "appointments", "AvailabilitySlot"],
  DoctorCreateOrConnectWithoutUserInput: ["where", "create"],
  PatientCreateWithoutUserInput: ["age", "fullName", "gender", "address", "profilePicture", "phoneNo", "Doctor", "appointments"],
  PatientCreateOrConnectWithoutUserInput: ["where", "create"],
  DoctorUpsertWithoutUserInput: ["update", "create", "where"],
  DoctorUpdateToOneWithWhereWithoutUserInput: ["where", "data"],
  DoctorUpdateWithoutUserInput: ["name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender", "patients", "appointments", "AvailabilitySlot"],
  PatientUpsertWithoutUserInput: ["update", "create", "where"],
  PatientUpdateToOneWithWhereWithoutUserInput: ["where", "data"],
  PatientUpdateWithoutUserInput: ["age", "fullName", "gender", "address", "profilePicture", "phoneNo", "Doctor", "appointments"],
  UserCreateWithoutDoctorInput: ["name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "patient"],
  UserCreateOrConnectWithoutDoctorInput: ["where", "create"],
  PatientCreateWithoutDoctorInput: ["age", "fullName", "gender", "address", "profilePicture", "phoneNo", "User", "appointments"],
  PatientCreateOrConnectWithoutDoctorInput: ["where", "create"],
  PatientCreateManyDoctorInputEnvelope: ["data", "skipDuplicates"],
  AppointmentCreateWithoutDoctorInput: ["fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "Patient"],
  AppointmentCreateOrConnectWithoutDoctorInput: ["where", "create"],
  AppointmentCreateManyDoctorInputEnvelope: ["data", "skipDuplicates"],
  AvailabilitySlotCreateWithoutDoctorInput: ["day", "startTime", "endTime", "isBooked"],
  AvailabilitySlotCreateOrConnectWithoutDoctorInput: ["where", "create"],
  AvailabilitySlotCreateManyDoctorInputEnvelope: ["data", "skipDuplicates"],
  UserUpsertWithoutDoctorInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutDoctorInput: ["where", "data"],
  UserUpdateWithoutDoctorInput: ["name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "patient"],
  PatientUpsertWithWhereUniqueWithoutDoctorInput: ["where", "update", "create"],
  PatientUpdateWithWhereUniqueWithoutDoctorInput: ["where", "data"],
  PatientUpdateManyWithWhereWithoutDoctorInput: ["where", "data"],
  PatientScalarWhereInput: ["AND", "OR", "NOT", "id", "age", "fullName", "gender", "address", "profilePicture", "phoneNo", "doctorId", "userId"],
  AppointmentUpsertWithWhereUniqueWithoutDoctorInput: ["where", "update", "create"],
  AppointmentUpdateWithWhereUniqueWithoutDoctorInput: ["where", "data"],
  AppointmentUpdateManyWithWhereWithoutDoctorInput: ["where", "data"],
  AppointmentScalarWhereInput: ["AND", "OR", "NOT", "id", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "doctorId", "patientId"],
  AvailabilitySlotUpsertWithWhereUniqueWithoutDoctorInput: ["where", "update", "create"],
  AvailabilitySlotUpdateWithWhereUniqueWithoutDoctorInput: ["where", "data"],
  AvailabilitySlotUpdateManyWithWhereWithoutDoctorInput: ["where", "data"],
  AvailabilitySlotScalarWhereInput: ["AND", "OR", "NOT", "id", "doctorId", "day", "startTime", "endTime", "isBooked"],
  DoctorCreateWithoutPatientsInput: ["name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender", "User", "appointments", "AvailabilitySlot"],
  DoctorCreateOrConnectWithoutPatientsInput: ["where", "create"],
  UserCreateWithoutPatientInput: ["name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "doctor"],
  UserCreateOrConnectWithoutPatientInput: ["where", "create"],
  AppointmentCreateWithoutPatientInput: ["fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "Doctor"],
  AppointmentCreateOrConnectWithoutPatientInput: ["where", "create"],
  AppointmentCreateManyPatientInputEnvelope: ["data", "skipDuplicates"],
  DoctorUpsertWithoutPatientsInput: ["update", "create", "where"],
  DoctorUpdateToOneWithWhereWithoutPatientsInput: ["where", "data"],
  DoctorUpdateWithoutPatientsInput: ["name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender", "User", "appointments", "AvailabilitySlot"],
  UserUpsertWithoutPatientInput: ["update", "create", "where"],
  UserUpdateToOneWithWhereWithoutPatientInput: ["where", "data"],
  UserUpdateWithoutPatientInput: ["name", "email", "password", "phoneNumber", "role", "token", "tokenExpire", "otp", "resetPasswordToken", "resetPasswordTokenExpire", "otpExpire", "profilePicture", "doctor"],
  AppointmentUpsertWithWhereUniqueWithoutPatientInput: ["where", "update", "create"],
  AppointmentUpdateWithWhereUniqueWithoutPatientInput: ["where", "data"],
  AppointmentUpdateManyWithWhereWithoutPatientInput: ["where", "data"],
  DoctorCreateWithoutAppointmentsInput: ["name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender", "User", "patients", "AvailabilitySlot"],
  DoctorCreateOrConnectWithoutAppointmentsInput: ["where", "create"],
  PatientCreateWithoutAppointmentsInput: ["age", "fullName", "gender", "address", "profilePicture", "phoneNo", "Doctor", "User"],
  PatientCreateOrConnectWithoutAppointmentsInput: ["where", "create"],
  DoctorUpsertWithoutAppointmentsInput: ["update", "create", "where"],
  DoctorUpdateToOneWithWhereWithoutAppointmentsInput: ["where", "data"],
  DoctorUpdateWithoutAppointmentsInput: ["name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender", "User", "patients", "AvailabilitySlot"],
  PatientUpsertWithoutAppointmentsInput: ["update", "create", "where"],
  PatientUpdateToOneWithWhereWithoutAppointmentsInput: ["where", "data"],
  PatientUpdateWithoutAppointmentsInput: ["age", "fullName", "gender", "address", "profilePicture", "phoneNo", "Doctor", "User"],
  DoctorCreateWithoutAvailabilitySlotInput: ["name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender", "User", "patients", "appointments"],
  DoctorCreateOrConnectWithoutAvailabilitySlotInput: ["where", "create"],
  DoctorUpsertWithoutAvailabilitySlotInput: ["update", "create", "where"],
  DoctorUpdateToOneWithWhereWithoutAvailabilitySlotInput: ["where", "data"],
  DoctorUpdateWithoutAvailabilitySlotInput: ["name", "profilePhoto", "address", "availability", "email", "isAvailable", "gender", "User", "patients", "appointments"],
  PatientCreateManyDoctorInput: ["id", "age", "fullName", "gender", "address", "profilePicture", "phoneNo", "userId"],
  AppointmentCreateManyDoctorInput: ["id", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "patientId"],
  AvailabilitySlotCreateManyDoctorInput: ["id", "day", "startTime", "endTime", "isBooked"],
  PatientUpdateWithoutDoctorInput: ["age", "fullName", "gender", "address", "profilePicture", "phoneNo", "User", "appointments"],
  AppointmentUpdateWithoutDoctorInput: ["fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "Patient"],
  AvailabilitySlotUpdateWithoutDoctorInput: ["day", "startTime", "endTime", "isBooked"],
  AppointmentCreateManyPatientInput: ["id", "fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "doctorId"],
  AppointmentUpdateWithoutPatientInput: ["fullName", "age", "gender", "phoneNo", "address", "medicalHistory", "presciptions", "details", "scheduledDate", "status", "Doctor"]
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

