"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DislikeSchema = void 0;
const mongoose_1 = require("mongoose");
exports.DislikeSchema = new mongoose_1.Schema({
    userId: {
        type: Number,
        required: true,
    },
    creationDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    twidditId: Object,
    replyId: Object,
});
//# sourceMappingURL=dislike.schema.js.map