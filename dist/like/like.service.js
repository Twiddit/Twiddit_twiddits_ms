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
exports.LikeService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let LikeService = class LikeService {
    constructor(likeModel) {
        this.likeModel = likeModel;
    }
    async createLike(createLikeDTO) {
        const createdLike = new this.likeModel(createLikeDTO);
        return await createdLike.save();
    }
    async deleteLike(likeId) {
        const like = await this.likeModel.findById(likeId);
        if (!like) {
            throw new common_1.HttpException(`Like with ${likeId} id does not exist`, common_1.HttpStatus.NOT_FOUND);
        }
        return await this.likeModel.findByIdAndDelete(likeId);
    }
    async getLikes() {
        const likes = await this.likeModel.find();
        return likes;
    }
    async getLike(likeId) {
        const like = await this.likeModel.findById(likeId);
        if (!like) {
            throw new common_1.HttpException(`Like with ${likeId} id does not exist`, common_1.HttpStatus.NOT_FOUND);
        }
        return like;
    }
    async getLikesOfTwiddit(twidditid) {
        const likes = await this.likeModel.find({ twidditId: twidditid });
        return likes;
    }
    async getNumberOfLikesOfTwiddit(twidditid) {
        const likes = await this.likeModel.find({ twidditId: twidditid });
        return likes.length;
    }
    async getLikesOfReply(replyid) {
        const likes = await this.likeModel.find({ replyId: replyid });
        return likes;
    }
    async getNumberOfLikesOfReply(replyid) {
        const likes = await this.likeModel.find({ replyId: replyid });
        return likes.length;
    }
};
LikeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Like')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LikeService);
exports.LikeService = LikeService;
//# sourceMappingURL=like.service.js.map