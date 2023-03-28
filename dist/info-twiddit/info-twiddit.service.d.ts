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
    getInfoTwiddits(twidditid: object): Promise<{
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
