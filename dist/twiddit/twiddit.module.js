"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwidditModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const twiddit_service_1 = require("./twiddit.service");
const twiddit_controller_1 = require("./twiddit.controller");
const twiddit_schema_1 = require("./schema/twiddit.schema");
let TwidditModule = class TwidditModule {
};
TwidditModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Twiddit', schema: twiddit_schema_1.TwidditsSchema }]),
        ],
        providers: [twiddit_service_1.TwidditService],
        controllers: [twiddit_controller_1.TwidditController],
    })
], TwidditModule);
exports.TwidditModule = TwidditModule;
//# sourceMappingURL=twiddit.module.js.map