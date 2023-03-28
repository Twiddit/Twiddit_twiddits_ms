"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InfoTwidditModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const info_twiddit_controller_1 = require("./info-twiddit.controller");
const info_twiddit_service_1 = require("./info-twiddit.service");
const twiddit_schema_1 = require("../twiddit/schema/twiddit.schema");
const reply_schema_1 = require("../reply/schema/reply.schema");
const like_schema_1 = require("../like/schema/like.schema");
const dislike_schema_1 = require("../dislike/schema/dislike.schema");
let InfoTwidditModule = class InfoTwidditModule {
};
InfoTwidditModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Twiddit', schema: twiddit_schema_1.TwidditsSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Reply', schema: reply_schema_1.ReplySchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Like', schema: like_schema_1.LikeSchema }]),
            mongoose_1.MongooseModule.forFeature([{ name: 'Dislike', schema: dislike_schema_1.DislikeSchema }]),
        ],
        controllers: [info_twiddit_controller_1.InfoTwidditController],
        providers: [info_twiddit_service_1.InfoTwidditService],
    })
], InfoTwidditModule);
exports.InfoTwidditModule = InfoTwidditModule;
//# sourceMappingURL=info-twiddit.module.js.map