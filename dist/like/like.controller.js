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
exports.LikeController = void 0;
const common_1 = require("@nestjs/common");
const like_service_1 = require("./like.service");
const createLikedto_1 = require("./dto/createLikedto");
let LikeController = class LikeController {
    constructor(likeService) {
        this.likeService = likeService;
    }
    async getLikes() {
        const likes = await this.likeService.getLikes();
        return likes;
    }
    async getLike(likeId) {
        const like = await this.likeService.getLike(likeId);
        return like;
    }
    async getLikesOfTwiddit(twidditId) {
        const twidditLikes = await this.likeService.getLikesOfTwiddit(twidditId);
        return twidditLikes;
    }
    async getNumberOfLikesOfTwiddit(twidditId) {
        const numberOfTwidditLikes = await this.likeService.getNumberOfLikesOfTwiddit(twidditId);
        return numberOfTwidditLikes;
    }
    async getLikesOfReply(replyId) {
        const replyLikes = await this.likeService.getLikesOfReply(replyId);
        return replyLikes;
    }
    async getNumberLikesOfReply(replyId) {
        const numberOfReplyLikes = await this.likeService.getNumberOfLikesOfReply(replyId);
        return numberOfReplyLikes;
    }
    async createLike(createLikeDTO) {
        const likeCreated = await this.likeService.createLike(createLikeDTO);
        return likeCreated;
    }
    async deleteLike(likeId) {
        const likeDeleted = await this.likeService.deleteLike(likeId);
        return likeDeleted;
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "getLikes", null);
__decorate([
    (0, common_1.Get)('/:likeId'),
    __param(0, (0, common_1.Param)('likeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "getLike", null);
__decorate([
    (0, common_1.Get)('/likes-twiddit/:twidditId'),
    __param(0, (0, common_1.Param)('twidditId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "getLikesOfTwiddit", null);
__decorate([
    (0, common_1.Get)('/number-likes-twiddit/:twidditId'),
    __param(0, (0, common_1.Param)('twidditId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "getNumberOfLikesOfTwiddit", null);
__decorate([
    (0, common_1.Get)('/likes-reply/:replyId'),
    __param(0, (0, common_1.Param)('replyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "getLikesOfReply", null);
__decorate([
    (0, common_1.Get)('/number-likes-reply/:replyId'),
    __param(0, (0, common_1.Param)('replyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "getNumberLikesOfReply", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createLikedto_1.CreateLikeDTO]),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "createLike", null);
__decorate([
    (0, common_1.Delete)('/:likeId'),
    __param(0, (0, common_1.Param)('likeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], LikeController.prototype, "deleteLike", null);
LikeController = __decorate([
    (0, common_1.Controller)('like'),
    __metadata("design:paramtypes", [like_service_1.LikeService])
], LikeController);
exports.LikeController = LikeController;
//# sourceMappingURL=like.controller.js.map