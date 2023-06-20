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
exports.InfoTwidditService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let InfoTwidditService = class InfoTwidditService {
    constructor(twidditModel, replyModel, likeModel, dislikeModel) {
        this.twidditModel = twidditModel;
        this.replyModel = replyModel;
        this.likeModel = likeModel;
        this.dislikeModel = dislikeModel;
    }
    async getInfoTwiddits(twidditid) {
        const twiddit = await this.twidditModel.findById(twidditid);
        console.log(Object.getOwnPropertyNames(twiddit));
        const replies = await this.replyModel.find({ twidditId: twidditid });
        const like = await this.likeModel.find({ twidditId: twidditid });
        const dislike = await this.dislikeModel.find({ twidditId: twidditid });
        let isRetwiddit = false;
        let originalTwiddit = {};
        if (twiddit.hasOwnProperty('retwidditId')) {
            isRetwiddit = true;
            originalTwiddit = await this.getInfoTwiddits(twiddit.retwidditId.toString());
        }
        const infoTwiddit = Object.assign({ twiddit, number_of_replies: replies.length, replies, number_of_likes: like.length, like, number_of_dislikes: dislike.length, dislike,
            isRetwiddit }, (isRetwiddit && { originalTwiddit }));
        if (twiddit === null) {
            throw new common_1.HttpException(`Twiddit not found by ${twidditid} id`, common_1.HttpStatus.NOT_FOUND);
        }
        return infoTwiddit;
    }
    async getUserTwiddits(userid) {
        const twiddits = await this.twidditModel.find({ userId: userid });
        const userTwiddits = [];
        if (twiddits.length === 0) {
            throw new common_1.HttpException(`Twiddits not found for user ${userid} id`, common_1.HttpStatus.NOT_FOUND);
        }
        for (const i in twiddits) {
            const toPush = await this.getInfoTwiddits(twiddits[i]._id.toString());
            userTwiddits.push(toPush);
        }
        return userTwiddits;
    }
    async getcommunidditTwiddits(communidditid) {
        const twiddits = await this.twidditModel.find({
            communidditsId: communidditid,
        });
        const communidditTwiddits = [];
        if (twiddits.length === 0) {
            throw new common_1.HttpException(`Twiddits not found for communiddit ${communidditid} id`, common_1.HttpStatus.NOT_FOUND);
        }
        for (const i in twiddits) {
            const toPush = await this.getInfoTwiddits(twiddits[i]._id.toString());
            communidditTwiddits.push(toPush);
        }
        return communidditTwiddits;
    }
    async getTwidditsByTag(tag) {
        const twiddits = await this.twidditModel.find({
            tags: tag,
        });
        const twidditsTag = [];
        if (twiddits.length === 0) {
            throw new common_1.HttpException(`Twiddits not found for tag: ${tag}`, common_1.HttpStatus.NOT_FOUND);
        }
        for (const i in twiddits) {
            const toPush = await this.getInfoTwiddits(twiddits[i]._id.toString());
            twidditsTag.push(toPush);
        }
        return twidditsTag;
    }
};
InfoTwidditService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Twiddit')),
    __param(1, (0, mongoose_1.InjectModel)('Reply')),
    __param(2, (0, mongoose_1.InjectModel)('Like')),
    __param(3, (0, mongoose_1.InjectModel)('Dislike')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], InfoTwidditService);
exports.InfoTwidditService = InfoTwidditService;
//# sourceMappingURL=info-twiddit.service.js.map