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
