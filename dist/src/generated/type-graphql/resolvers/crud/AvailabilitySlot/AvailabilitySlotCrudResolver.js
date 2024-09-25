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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailabilitySlotCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregateAvailabilitySlotArgs_1 = require("./args/AggregateAvailabilitySlotArgs");
const CreateManyAndReturnAvailabilitySlotArgs_1 = require("./args/CreateManyAndReturnAvailabilitySlotArgs");
const CreateManyAvailabilitySlotArgs_1 = require("./args/CreateManyAvailabilitySlotArgs");
const CreateOneAvailabilitySlotArgs_1 = require("./args/CreateOneAvailabilitySlotArgs");
const DeleteManyAvailabilitySlotArgs_1 = require("./args/DeleteManyAvailabilitySlotArgs");
const DeleteOneAvailabilitySlotArgs_1 = require("./args/DeleteOneAvailabilitySlotArgs");
const FindFirstAvailabilitySlotArgs_1 = require("./args/FindFirstAvailabilitySlotArgs");
const FindFirstAvailabilitySlotOrThrowArgs_1 = require("./args/FindFirstAvailabilitySlotOrThrowArgs");
const FindManyAvailabilitySlotArgs_1 = require("./args/FindManyAvailabilitySlotArgs");
const FindUniqueAvailabilitySlotArgs_1 = require("./args/FindUniqueAvailabilitySlotArgs");
const FindUniqueAvailabilitySlotOrThrowArgs_1 = require("./args/FindUniqueAvailabilitySlotOrThrowArgs");
const GroupByAvailabilitySlotArgs_1 = require("./args/GroupByAvailabilitySlotArgs");
const UpdateManyAvailabilitySlotArgs_1 = require("./args/UpdateManyAvailabilitySlotArgs");
const UpdateOneAvailabilitySlotArgs_1 = require("./args/UpdateOneAvailabilitySlotArgs");
const UpsertOneAvailabilitySlotArgs_1 = require("./args/UpsertOneAvailabilitySlotArgs");
const helpers_1 = require("../../../helpers");
const AvailabilitySlot_1 = require("../../../models/AvailabilitySlot");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateAvailabilitySlot_1 = require("../../outputs/AggregateAvailabilitySlot");
const AvailabilitySlotGroupBy_1 = require("../../outputs/AvailabilitySlotGroupBy");
const CreateManyAndReturnAvailabilitySlot_1 = require("../../outputs/CreateManyAndReturnAvailabilitySlot");
let AvailabilitySlotCrudResolver = class AvailabilitySlotCrudResolver {
    async aggregateAvailabilitySlot(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).availabilitySlot.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyAvailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).availabilitySlot.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnAvailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).availabilitySlot.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneAvailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).availabilitySlot.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyAvailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).availabilitySlot.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneAvailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).availabilitySlot.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAvailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).availabilitySlot.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstAvailabilitySlotOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).availabilitySlot.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async availabilitySlots(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).availabilitySlot.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async availabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).availabilitySlot.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getAvailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).availabilitySlot.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByAvailabilitySlot(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).availabilitySlot.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyAvailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).availabilitySlot.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneAvailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).availabilitySlot.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneAvailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).availabilitySlot.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.AvailabilitySlotCrudResolver = AvailabilitySlotCrudResolver;
__decorate([
    TypeGraphQL.Query(_returns => AggregateAvailabilitySlot_1.AggregateAvailabilitySlot, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateAvailabilitySlotArgs_1.AggregateAvailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], AvailabilitySlotCrudResolver.prototype, "aggregateAvailabilitySlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyAvailabilitySlotArgs_1.CreateManyAvailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], AvailabilitySlotCrudResolver.prototype, "createManyAvailabilitySlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnAvailabilitySlot_1.CreateManyAndReturnAvailabilitySlot], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyAndReturnAvailabilitySlotArgs_1.CreateManyAndReturnAvailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], AvailabilitySlotCrudResolver.prototype, "createManyAndReturnAvailabilitySlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AvailabilitySlot_1.AvailabilitySlot, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneAvailabilitySlotArgs_1.CreateOneAvailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], AvailabilitySlotCrudResolver.prototype, "createOneAvailabilitySlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyAvailabilitySlotArgs_1.DeleteManyAvailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], AvailabilitySlotCrudResolver.prototype, "deleteManyAvailabilitySlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AvailabilitySlot_1.AvailabilitySlot, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneAvailabilitySlotArgs_1.DeleteOneAvailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], AvailabilitySlotCrudResolver.prototype, "deleteOneAvailabilitySlot", null);
__decorate([
    TypeGraphQL.Query(_returns => AvailabilitySlot_1.AvailabilitySlot, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstAvailabilitySlotArgs_1.FindFirstAvailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], AvailabilitySlotCrudResolver.prototype, "findFirstAvailabilitySlot", null);
__decorate([
    TypeGraphQL.Query(_returns => AvailabilitySlot_1.AvailabilitySlot, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstAvailabilitySlotOrThrowArgs_1.FindFirstAvailabilitySlotOrThrowArgs]),
    __metadata("design:returntype", Promise)
], AvailabilitySlotCrudResolver.prototype, "findFirstAvailabilitySlotOrThrow", null);
__decorate([
    TypeGraphQL.Query(_returns => [AvailabilitySlot_1.AvailabilitySlot], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyAvailabilitySlotArgs_1.FindManyAvailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], AvailabilitySlotCrudResolver.prototype, "availabilitySlots", null);
__decorate([
    TypeGraphQL.Query(_returns => AvailabilitySlot_1.AvailabilitySlot, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueAvailabilitySlotArgs_1.FindUniqueAvailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], AvailabilitySlotCrudResolver.prototype, "availabilitySlot", null);
__decorate([
    TypeGraphQL.Query(_returns => AvailabilitySlot_1.AvailabilitySlot, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueAvailabilitySlotOrThrowArgs_1.FindUniqueAvailabilitySlotOrThrowArgs]),
    __metadata("design:returntype", Promise)
], AvailabilitySlotCrudResolver.prototype, "getAvailabilitySlot", null);
__decorate([
    TypeGraphQL.Query(_returns => [AvailabilitySlotGroupBy_1.AvailabilitySlotGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByAvailabilitySlotArgs_1.GroupByAvailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], AvailabilitySlotCrudResolver.prototype, "groupByAvailabilitySlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyAvailabilitySlotArgs_1.UpdateManyAvailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], AvailabilitySlotCrudResolver.prototype, "updateManyAvailabilitySlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AvailabilitySlot_1.AvailabilitySlot, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneAvailabilitySlotArgs_1.UpdateOneAvailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], AvailabilitySlotCrudResolver.prototype, "updateOneAvailabilitySlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AvailabilitySlot_1.AvailabilitySlot, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneAvailabilitySlotArgs_1.UpsertOneAvailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], AvailabilitySlotCrudResolver.prototype, "upsertOneAvailabilitySlot", null);
exports.AvailabilitySlotCrudResolver = AvailabilitySlotCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => AvailabilitySlot_1.AvailabilitySlot)
], AvailabilitySlotCrudResolver);
