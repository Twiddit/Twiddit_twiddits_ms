"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplyController = void 0;
const common_1 = require("@nestjs/common");
const reply_service_1 = require("./reply.service");
const createReply_dto_1 = require("./dto/createReply.dto");
const updateReply_dto_1 = require("./dto/updateReply.dto");
let ReplyController = class ReplyController {
    constructor(replyService) {
        this.replyService = replyService;
    }
    async getReplies() {
        const replies = await this.replyService.getReplies();
        return replies;
    }
    async getReply(replyId) {
        const reply = await this.replyService.getReply(replyId);
        return reply;
    }
    async createReply(createReplyDTO) {
        const replyCreated = await this.replyService.createReply(createReplyDTO);
        return replyCreated;
    }
    async updateReply(replyId, updateReplyDTO) {
        const replyUpdated = await this.replyService.updateReply(replyId, updateReplyDTO);
        return replyUpdated;
    }
    async deleteReply(replyId) {
        const replyDeleted = await this.replyService.deleteReply(replyId);
        return replyDeleted;
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReplyController.prototype, "getReplies", null);
__decorate([
    (0, common_1.Get)('/:replyId'),
    __param(0, (0, common_1.Param)('replyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReplyController.prototype, "getReply", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createReply_dto_1.CreateReplyDTO]),
    __metadata("design:returntype", Promise)
], ReplyController.prototype, "createReply", null);
__decorate([
    (0, common_1.Put)('/:replyId'),
    __param(0, (0, common_1.Param)('replyId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateReply_dto_1.UpdateReplyDTO]),
    __metadata("design:returntype", Promise)
], ReplyController.prototype, "updateReply", null);
__decorate([
    (0, common_1.Delete)('/:replyId'),
    __param(0, (0, common_1.Param)('replyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ReplyController.prototype, "deleteReply", null);
ReplyController = __decorate([
    (0, common_1.Controller)('reply'),
    __metadata("design:paramtypes", [reply_service_1.ReplyService])
], ReplyController);
exports.ReplyController = ReplyController;
//# sourceMappingURL=reply.controller.js.map