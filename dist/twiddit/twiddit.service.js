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
exports.TwidditService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TwidditService = class TwidditService {
    constructor(twidditModel) {
        this.twidditModel = twidditModel;
    }
    async createTwiddit(createTwidditDTO) {
        const createdTwiddit = new this.twidditModel(createTwidditDTO);
        return await createdTwiddit.save();
    }
    async getTwiddits() {
        const twiddits = await this.twidditModel.find();
        return twiddits;
    }
    async getTwiddit(twidditId) {
        const twiddit = await this.twidditModel.findById(twidditId);
        if (!twiddit) {
            throw new common_1.HttpException(`Twiddit not found by ${twidditId} id`, common_1.HttpStatus.NOT_FOUND);
        }
        return twiddit;
    }
    async deleteTwiddit(twidditId) {
        const twiddit = await this.twidditModel.findById(twidditId);
        if (!twiddit) {
            throw new common_1.HttpException(`Twiddit not found by ${twidditId} id`, common_1.HttpStatus.NOT_FOUND);
        }
        return await this.twidditModel.findByIdAndDelete(twidditId);
    }
    async updateTwiddit(twidditId, updateTwidditDTO) {
        const twiddit = await this.twidditModel.findById(twidditId);
        if (!twiddit) {
            throw new common_1.HttpException(`Twiddit not found by ${twidditId} id`, common_1.HttpStatus.NOT_FOUND);
        }
        return await this.twidditModel.findByIdAndUpdate(twidditId, updateTwidditDTO);
    }
};
TwidditService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Twiddit')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TwidditService);
exports.TwidditService = TwidditService;
//# sourceMappingURL=twiddit.service.js.map