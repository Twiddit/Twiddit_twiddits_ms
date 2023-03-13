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
exports.DislikeController = void 0;
const common_1 = require("@nestjs/common");
const dislike_service_1 = require("./dislike.service");
const createDislikedto_1 = require("./dto/createDislikedto");
let DislikeController = class DislikeController {
    constructor(dislikeService) {
        this.dislikeService = dislikeService;
    }
    async getDislikes() {
        const dislikes = await this.dislikeService.getDislikes();
        return dislikes;
    }
    async getDislike(dislikeId) {
        const dislike = await this.dislikeService.getDislike(dislikeId);
        return dislike;
    }
    async getDislikesOfTwiddit(twidditId) {
        const numberOfTwidditDislike = await this.dislikeService.getDislikesOfTwiddit(twidditId);
        return numberOfTwidditDislike;
    }
    async getDislikesOfReply(replyId) {
        const numberOfReplyDislike = await this.dislikeService.getDislikesOfReply(replyId);
        return numberOfReplyDislike;
    }
    async createDislike(createDislikeDTO) {
        const dislikeCreated = await this.dislikeService.createDislike(createDislikeDTO);
        return dislikeCreated;
    }
    async deleteDislike(dislikeId) {
        const dislikeDeleted = await this.dislikeService.deleteDislike(dislikeId);
        return dislikeDeleted;
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DislikeController.prototype, "getDislikes", null);
__decorate([
    (0, common_1.Get)('/:dislikeId'),
    __param(0, (0, common_1.Param)('dislikeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DislikeController.prototype, "getDislike", null);
__decorate([
    (0, common_1.Get)('/dislikes-twiddit/:twidditId'),
    __param(0, (0, common_1.Param)('twidditId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DislikeController.prototype, "getDislikesOfTwiddit", null);
__decorate([
    (0, common_1.Get)('/dislikes-reply/:replyId'),
    __param(0, (0, common_1.Param)('replyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DislikeController.prototype, "getDislikesOfReply", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createDislikedto_1.CreateDislikeDTO]),
    __metadata("design:returntype", Promise)
], DislikeController.prototype, "createDislike", null);
__decorate([
    (0, common_1.Delete)('/:dislikeId'),
    __param(0, (0, common_1.Param)('dislikeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DislikeController.prototype, "deleteDislike", null);
DislikeController = __decorate([
    (0, common_1.Controller)('dislike'),
    __metadata("design:paramtypes", [dislike_service_1.DislikeService])
], DislikeController);
exports.DislikeController = DislikeController;
//# sourceMappingURL=dislike.controller.js.map