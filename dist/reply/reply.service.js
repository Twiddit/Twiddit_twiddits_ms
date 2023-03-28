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
exports.ReplyService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ReplyService = class ReplyService {
    constructor(replyModel) {
        this.replyModel = replyModel;
    }
    async createReply(createReplyDTO) {
        const createdReply = new this.replyModel(createReplyDTO);
        return await createdReply.save();
    }
    async getReplies() {
        const replies = await this.replyModel.find();
        return replies;
    }
    async getReply(replyId) {
        const reply = await this.replyModel.findById(replyId);
        if (!reply) {
            throw new common_1.HttpException(`Reply not found by ${replyId} id`, common_1.HttpStatus.NOT_FOUND);
        }
        return reply;
    }
    async deleteReply(replyId) {
        const reply = await this.replyModel.findById(replyId);
        if (!reply) {
            throw new common_1.HttpException(`Reply not found by ${replyId} id`, common_1.HttpStatus.NOT_FOUND);
        }
        return await this.replyModel.findByIdAndDelete(replyId);
    }
    async updateReply(replyId, updateReplyDTO) {
        const reply = await this.replyModel.findById(replyId);
        if (!reply) {
            throw new common_1.HttpException(`Reply not found by ${replyId} id`, common_1.HttpStatus.NOT_FOUND);
        }
        return await this.replyModel.findByIdAndUpdate(replyId, updateReplyDTO);
    }
    async getRepliesOfTwiddit(twidditid) {
        const replies = await this.replyModel.find({ twidditId: twidditid });
        return replies;
    }
    async getRepliesOfReply(replyid) {
        const replies = await this.replyModel.find({ threadId: replyid });
        return replies;
    }
};
ReplyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Reply')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ReplyService);
exports.ReplyService = ReplyService;
//# sourceMappingURL=reply.service.js.map