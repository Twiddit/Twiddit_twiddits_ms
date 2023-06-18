"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const twiddit_module_1 = require("./twiddit/twiddit.module");
const mongoose_1 = require("@nestjs/mongoose");
const like_module_1 = require("./like/like.module");
const dislike_module_1 = require("./dislike/dislike.module");
const reply_module_1 = require("./reply/reply.module");
const config_1 = require("@nestjs/config");
const info_twiddit_module_1 = require("./info-twiddit/info-twiddit.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            mongoose_1.MongooseModule.forRoot('mongodb://twiddit:12345@34.81.212.38:27017/twiddits?authSource=admin'),
            twiddit_module_1.TwidditModule,
            like_module_1.LikeModule,
            dislike_module_1.DislikeModule,
            reply_module_1.ReplyModule,
            info_twiddit_module_1.InfoTwidditModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map