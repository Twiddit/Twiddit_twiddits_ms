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
import { InfoTwidditService } from './info-twiddit.service';
export declare class InfoTwidditController {
    private infoTwidditService;
    constructor(infoTwidditService: InfoTwidditService);
    getInfoTwiddit(twidditId: object): Promise<{
        originalTwiddit: {};
        twiddit: import("mongoose").Document<unknown, {}, import("../twiddit/interfaces/twiddit.interface").Twiddit> & Omit<import("../twiddit/interfaces/twiddit.interface").Twiddit & {
            _id: import("mongoose").Types.ObjectId;
        }, never>;
        number_of_replies: number;
        replies: (import("mongoose").Document<unknown, {}, import("../reply/interfaces/reply.interface").Reply> & Omit<import("../reply/interfaces/reply.interface").Reply & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
        number_of_likes: number;
        like: (import("mongoose").Document<unknown, {}, import("../like/interfaces/like.interface").Like> & Omit<import("../like/interfaces/like.interface").Like & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
        number_of_dislikes: number;
        dislike: (import("mongoose").Document<unknown, {}, import("../dislike/interfaces/dislike.interface").Dislike> & Omit<import("../dislike/interfaces/dislike.interface").Dislike & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
        isRetwiddit: boolean;
    }>;
    getUserInfoTwiddit(userId: object): Promise<any>;
    getComunniddtInfoTwiddit(communidditId: object): Promise<any>;
    getTwidditsByTag(tag: string): Promise<any>;
}
