/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { ReplyService } from './reply.service';
import { CreateReplyDTO } from './dto/createReply.dto';
import { UpdateReplyDTO } from './dto/updateReply.dto';
export declare class ReplyController {
    private replyService;
    constructor(replyService: ReplyService);
    getReplies(): Promise<import("./interfaces/reply.interface").Reply[]>;
    getReply(replyId: string): Promise<import("./interfaces/reply.interface").Reply>;
    createReply(createReplyDTO: CreateReplyDTO): Promise<import("mongoose").Document<unknown, {}, import("./interfaces/reply.interface").Reply> & Omit<import("./interfaces/reply.interface").Reply & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateReply(replyId: string, updateReplyDTO: UpdateReplyDTO): Promise<import("mongoose").Document<unknown, {}, import("./interfaces/reply.interface").Reply> & Omit<import("./interfaces/reply.interface").Reply & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    deleteReply(replyId: string): Promise<import("mongoose").Document<unknown, {}, import("./interfaces/reply.interface").Reply> & Omit<import("./interfaces/reply.interface").Reply & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
