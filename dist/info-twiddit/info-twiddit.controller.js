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
exports.InfoTwidditController = void 0;
const common_1 = require("@nestjs/common");
const info_twiddit_service_1 = require("./info-twiddit.service");
let InfoTwidditController = class InfoTwidditController {
    constructor(infoTwidditService) {
        this.infoTwidditService = infoTwidditService;
    }
    async getInfoTwiddit(twidditId) {
        return await this.infoTwidditService.getInfoTwiddits(twidditId);
    }
    async getUserInfoTwiddit(userId) {
        return await this.infoTwidditService.getUserTwiddits(userId);
    }
    async getComunniddtInfoTwiddit(communidditId) {
        return await this.infoTwidditService.getcommunidditTwiddits(communidditId);
    }
    async getTwidditsByTag(tag) {
        return await this.infoTwidditService.getTwidditsByTag(tag);
    }
};
__decorate([
    (0, common_1.Get)('/:twidditId'),
    __param(0, (0, common_1.Param)('twidditId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InfoTwidditController.prototype, "getInfoTwiddit", null);
__decorate([
    (0, common_1.Get)('/user/:userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InfoTwidditController.prototype, "getUserInfoTwiddit", null);
__decorate([
    (0, common_1.Get)('/communiddit/:communidditId'),
    __param(0, (0, common_1.Param)('communidditId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InfoTwidditController.prototype, "getComunniddtInfoTwiddit", null);
__decorate([
    (0, common_1.Get)('/tag/:tag'),
    __param(0, (0, common_1.Param)('tag')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InfoTwidditController.prototype, "getTwidditsByTag", null);
InfoTwidditController = __decorate([
    (0, common_1.Controller)('info-twiddit'),
    __metadata("design:paramtypes", [info_twiddit_service_1.InfoTwidditService])
], InfoTwidditController);
exports.InfoTwidditController = InfoTwidditController;
//# sourceMappingURL=info-twiddit.controller.js.map