"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwidditsSchema = void 0;
const mongoose_1 = require("mongoose");
exports.TwidditsSchema = new mongoose_1.Schema({
    userId: {
        type: Number,
        required: true,
    },
    comunnidditsId: Object,
    retwidditId: Object,
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
    tags: Array,
});
//# sourceMappingURL=twiddit.schema.js.map