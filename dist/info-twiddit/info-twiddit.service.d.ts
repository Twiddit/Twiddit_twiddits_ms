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
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Twiddit } from '../twiddit/interfaces/twiddit.interface';
import { Reply } from '../reply/interfaces/reply.interface';
import { Like } from '../like/interfaces/like.interface';
import { Dislike } from '../dislike/interfaces/dislike.interface';
export declare class InfoTwidditService {
    private twidditModel;
    private replyModel;
    private likeModel;
    private dislikeModel;
    constructor(twidditModel: Model<Twiddit>, replyModel: Model<Reply>, likeModel: Model<Like>, dislikeModel: Model<Dislike>);
    getInfoTwiddits(twidditid: any): Promise<{
        originalTwiddit: {};
        twiddit: import("mongoose").Document<unknown, {}, Twiddit> & Omit<Twiddit & {
            _id: import("mongoose").Types.ObjectId;
        }, never>;
        number_of_replies: number;
        replies: (import("mongoose").Document<unknown, {}, Reply> & Omit<Reply & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
        number_of_likes: number;
        like: (import("mongoose").Document<unknown, {}, Like> & Omit<Like & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
        number_of_dislikes: number;
        dislike: (import("mongoose").Document<unknown, {}, Dislike> & Omit<Dislike & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
        isRetwiddit: boolean;
    }>;
    getUserTwiddits(userid: object): Promise<any>;
    getcommunidditTwiddits(communidditid: object): Promise<any>;
    getTwidditsByTag(tag: string): Promise<any>;
}
