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
exports.UnavailabilitySlotCrudResolver = void 0;
const TypeGraphQL = __importStar(require("type-graphql"));
const AggregateUnavailabilitySlotArgs_1 = require("./args/AggregateUnavailabilitySlotArgs");
const CreateManyAndReturnUnavailabilitySlotArgs_1 = require("./args/CreateManyAndReturnUnavailabilitySlotArgs");
const CreateManyUnavailabilitySlotArgs_1 = require("./args/CreateManyUnavailabilitySlotArgs");
const CreateOneUnavailabilitySlotArgs_1 = require("./args/CreateOneUnavailabilitySlotArgs");
const DeleteManyUnavailabilitySlotArgs_1 = require("./args/DeleteManyUnavailabilitySlotArgs");
const DeleteOneUnavailabilitySlotArgs_1 = require("./args/DeleteOneUnavailabilitySlotArgs");
const FindFirstUnavailabilitySlotArgs_1 = require("./args/FindFirstUnavailabilitySlotArgs");
const FindFirstUnavailabilitySlotOrThrowArgs_1 = require("./args/FindFirstUnavailabilitySlotOrThrowArgs");
const FindManyUnavailabilitySlotArgs_1 = require("./args/FindManyUnavailabilitySlotArgs");
const FindUniqueUnavailabilitySlotArgs_1 = require("./args/FindUniqueUnavailabilitySlotArgs");
const FindUniqueUnavailabilitySlotOrThrowArgs_1 = require("./args/FindUniqueUnavailabilitySlotOrThrowArgs");
const GroupByUnavailabilitySlotArgs_1 = require("./args/GroupByUnavailabilitySlotArgs");
const UpdateManyUnavailabilitySlotArgs_1 = require("./args/UpdateManyUnavailabilitySlotArgs");
const UpdateOneUnavailabilitySlotArgs_1 = require("./args/UpdateOneUnavailabilitySlotArgs");
const UpsertOneUnavailabilitySlotArgs_1 = require("./args/UpsertOneUnavailabilitySlotArgs");
const helpers_1 = require("../../../helpers");
const UnavailabilitySlot_1 = require("../../../models/UnavailabilitySlot");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const AggregateUnavailabilitySlot_1 = require("../../outputs/AggregateUnavailabilitySlot");
const CreateManyAndReturnUnavailabilitySlot_1 = require("../../outputs/CreateManyAndReturnUnavailabilitySlot");
const UnavailabilitySlotGroupBy_1 = require("../../outputs/UnavailabilitySlotGroupBy");
let UnavailabilitySlotCrudResolver = class UnavailabilitySlotCrudResolver {
    async aggregateUnavailabilitySlot(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).unavailabilitySlot.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
    async createManyUnavailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).unavailabilitySlot.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createManyAndReturnUnavailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).unavailabilitySlot.createManyAndReturn({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async createOneUnavailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).unavailabilitySlot.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteManyUnavailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).unavailabilitySlot.deleteMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async deleteOneUnavailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).unavailabilitySlot.delete({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstUnavailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).unavailabilitySlot.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async findFirstUnavailabilitySlotOrThrow(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).unavailabilitySlot.findFirstOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async unavailabilitySlots(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).unavailabilitySlot.findMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async unavailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).unavailabilitySlot.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async getUnavailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).unavailabilitySlot.findUniqueOrThrow({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async groupByUnavailabilitySlot(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).unavailabilitySlot.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
    async updateManyUnavailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).unavailabilitySlot.updateMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async updateOneUnavailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).unavailabilitySlot.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
    async upsertOneUnavailabilitySlot(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).unavailabilitySlot.upsert({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.UnavailabilitySlotCrudResolver = UnavailabilitySlotCrudResolver;
__decorate([
    TypeGraphQL.Query(_returns => AggregateUnavailabilitySlot_1.AggregateUnavailabilitySlot, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, AggregateUnavailabilitySlotArgs_1.AggregateUnavailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], UnavailabilitySlotCrudResolver.prototype, "aggregateUnavailabilitySlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyUnavailabilitySlotArgs_1.CreateManyUnavailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], UnavailabilitySlotCrudResolver.prototype, "createManyUnavailabilitySlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => [CreateManyAndReturnUnavailabilitySlot_1.CreateManyAndReturnUnavailabilitySlot], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateManyAndReturnUnavailabilitySlotArgs_1.CreateManyAndReturnUnavailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], UnavailabilitySlotCrudResolver.prototype, "createManyAndReturnUnavailabilitySlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UnavailabilitySlot_1.UnavailabilitySlot, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, CreateOneUnavailabilitySlotArgs_1.CreateOneUnavailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], UnavailabilitySlotCrudResolver.prototype, "createOneUnavailabilitySlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteManyUnavailabilitySlotArgs_1.DeleteManyUnavailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], UnavailabilitySlotCrudResolver.prototype, "deleteManyUnavailabilitySlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UnavailabilitySlot_1.UnavailabilitySlot, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, DeleteOneUnavailabilitySlotArgs_1.DeleteOneUnavailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], UnavailabilitySlotCrudResolver.prototype, "deleteOneUnavailabilitySlot", null);
__decorate([
    TypeGraphQL.Query(_returns => UnavailabilitySlot_1.UnavailabilitySlot, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstUnavailabilitySlotArgs_1.FindFirstUnavailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], UnavailabilitySlotCrudResolver.prototype, "findFirstUnavailabilitySlot", null);
__decorate([
    TypeGraphQL.Query(_returns => UnavailabilitySlot_1.UnavailabilitySlot, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindFirstUnavailabilitySlotOrThrowArgs_1.FindFirstUnavailabilitySlotOrThrowArgs]),
    __metadata("design:returntype", Promise)
], UnavailabilitySlotCrudResolver.prototype, "findFirstUnavailabilitySlotOrThrow", null);
__decorate([
    TypeGraphQL.Query(_returns => [UnavailabilitySlot_1.UnavailabilitySlot], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindManyUnavailabilitySlotArgs_1.FindManyUnavailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], UnavailabilitySlotCrudResolver.prototype, "unavailabilitySlots", null);
__decorate([
    TypeGraphQL.Query(_returns => UnavailabilitySlot_1.UnavailabilitySlot, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueUnavailabilitySlotArgs_1.FindUniqueUnavailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], UnavailabilitySlotCrudResolver.prototype, "unavailabilitySlot", null);
__decorate([
    TypeGraphQL.Query(_returns => UnavailabilitySlot_1.UnavailabilitySlot, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, FindUniqueUnavailabilitySlotOrThrowArgs_1.FindUniqueUnavailabilitySlotOrThrowArgs]),
    __metadata("design:returntype", Promise)
], UnavailabilitySlotCrudResolver.prototype, "getUnavailabilitySlot", null);
__decorate([
    TypeGraphQL.Query(_returns => [UnavailabilitySlotGroupBy_1.UnavailabilitySlotGroupBy], {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, GroupByUnavailabilitySlotArgs_1.GroupByUnavailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], UnavailabilitySlotCrudResolver.prototype, "groupByUnavailabilitySlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateManyUnavailabilitySlotArgs_1.UpdateManyUnavailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], UnavailabilitySlotCrudResolver.prototype, "updateManyUnavailabilitySlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UnavailabilitySlot_1.UnavailabilitySlot, {
        nullable: true
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpdateOneUnavailabilitySlotArgs_1.UpdateOneUnavailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], UnavailabilitySlotCrudResolver.prototype, "updateOneUnavailabilitySlot", null);
__decorate([
    TypeGraphQL.Mutation(_returns => UnavailabilitySlot_1.UnavailabilitySlot, {
        nullable: false
    }),
    __param(0, TypeGraphQL.Ctx()),
    __param(1, TypeGraphQL.Info()),
    __param(2, TypeGraphQL.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, UpsertOneUnavailabilitySlotArgs_1.UpsertOneUnavailabilitySlotArgs]),
    __metadata("design:returntype", Promise)
], UnavailabilitySlotCrudResolver.prototype, "upsertOneUnavailabilitySlot", null);
exports.UnavailabilitySlotCrudResolver = UnavailabilitySlotCrudResolver = __decorate([
    TypeGraphQL.Resolver(_of => UnavailabilitySlot_1.UnavailabilitySlot)
], UnavailabilitySlotCrudResolver);
