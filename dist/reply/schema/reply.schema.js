"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReplySchema = void 0;
const mongoose_1 = require("mongoose");
exports.ReplySchema = new mongoose_1.Schema({
    userId: {
        type: Number,
        required: true,
    },
    threadId: Object,
    twidditId: {
        type: Object,
        required: true,
    },
    text: String,
    creationDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    imageURL1: String,
    imageURL2: String,
    imageURL3: String,
    imageURL4: String,
    videoURL: String,
});
//# sourceMappingURL=reply.schema.js.map