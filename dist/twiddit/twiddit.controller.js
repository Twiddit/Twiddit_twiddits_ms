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
exports.TwidditController = void 0;
const common_1 = require("@nestjs/common");
const twiddit_service_1 = require("./twiddit.service");
const createTwiddit_dto_1 = require("./dto/createTwiddit.dto");
const updateTwiddit_dto_1 = require("./dto/updateTwiddit.dto");
let TwidditController = class TwidditController {
    constructor(twidditService) {
        this.twidditService = twidditService;
    }
    async getTwiddits() {
        const twiddits = await this.twidditService.getTwiddits();
        return twiddits;
    }
    async getTwiddit(twidditId) {
        const twiddit = await this.twidditService.getTwiddit(twidditId);
        return twiddit;
    }
    async createTwiddit(createTwidditDTO) {
        const twidditCreated = await this.twidditService.createTwiddit(createTwidditDTO);
        return twidditCreated;
    }
    async updateTwiddit(twidditId, updateTwidditDTO) {
        const twidditUpdated = await this.twidditService.updateTwiddit(twidditId, updateTwidditDTO);
        return twidditUpdated;
    }
    async deleteTwiddit(twidditId) {
        const twidditDeleted = await this.twidditService.deleteTwiddit(twidditId);
        return twidditDeleted;
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TwidditController.prototype, "getTwiddits", null);
__decorate([
    (0, common_1.Get)('/:twidditId'),
    __param(0, (0, common_1.Param)('twidditId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TwidditController.prototype, "getTwiddit", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [createTwiddit_dto_1.CreateTwidditDTO]),
    __metadata("design:returntype", Promise)
], TwidditController.prototype, "createTwiddit", null);
__decorate([
    (0, common_1.Put)('/:twidditId'),
    __param(0, (0, common_1.Param)('twidditId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateTwiddit_dto_1.UpdateTwidditDTO]),
    __metadata("design:returntype", Promise)
], TwidditController.prototype, "updateTwiddit", null);
__decorate([
    (0, common_1.Delete)('/:twidditId'),
    __param(0, (0, common_1.Param)('twidditId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TwidditController.prototype, "deleteTwiddit", null);
TwidditController = __decorate([
    (0, common_1.Controller)('twiddit'),
    __metadata("design:paramtypes", [twiddit_service_1.TwidditService])
], TwidditController);
exports.TwidditController = TwidditController;
//# sourceMappingURL=twiddit.controller.js.map