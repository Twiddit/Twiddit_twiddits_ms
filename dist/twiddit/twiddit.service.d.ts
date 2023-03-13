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
import { Twiddit } from './interfaces/twiddit.interface';
import { CreateTwidditDTO } from './dto/createTwiddit.dto';
import { UpdateTwidditDTO } from './dto/updateTwiddit.dto';
export declare class TwidditService {
    private twidditModel;
    constructor(twidditModel: Model<Twiddit>);
    createTwiddit(createTwidditDTO: CreateTwidditDTO): Promise<import("mongoose").Document<unknown, {}, Twiddit> & Omit<Twiddit & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    getTwiddits(): Promise<Twiddit[]>;
    getTwiddit(twidditId: string): Promise<Twiddit>;
    deleteTwiddit(twidditId: string): Promise<import("mongoose").Document<unknown, {}, Twiddit> & Omit<Twiddit & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    updateTwiddit(twidditId: string, updateTwidditDTO: UpdateTwidditDTO): Promise<import("mongoose").Document<unknown, {}, Twiddit> & Omit<Twiddit & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
