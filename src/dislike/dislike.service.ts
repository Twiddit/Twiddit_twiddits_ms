import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dislike } from './interfaces/dislike.interface';
import { CreateDislikeDTO } from './dto/createDislikedto';

@Injectable()
export class DislikeService {
  constructor(@InjectModel('Dislike') private dislikeModel: Model<Dislike>) {}

  async createDislike(createDislikeDTO: CreateDislikeDTO) {
    const createdLike = new this.dislikeModel(createDislikeDTO);
    return await createdLike.save();
  }

  async deleteDislike(dislikeId: string) {
    const dislike = await this.dislikeModel.findById(dislikeId);
    if (!dislike) {
      throw new HttpException(
        `Like with ${dislikeId} id does not exist`,
        HttpStatus.NOT_FOUND,
      );
    }
    return await this.dislikeModel.findByIdAndDelete(dislikeId);
  }

  async getDislikes(): Promise<Dislike[]> {
    const dislikes = await this.dislikeModel.find();
    return dislikes;
  }

  async getDislike(dislikeId: string): Promise<Dislike> {
    const dislike = await this.dislikeModel.findById(dislikeId);
    if (!dislike) {
      throw new HttpException(
        `Like with ${dislikeId} id does not exist`,
        HttpStatus.NOT_FOUND,
      );
    }
    return dislike;
  }

  async getDislikesOfTwiddit(twidditid: object) {
    const dislike = await this.dislikeModel.find({ twidditId: twidditid });
    return dislike;
  }

  async getDislikesOfReply(replyid: object) {
    const dislike = await this.dislikeModel.find({ replyId: replyid });
    return dislike;
  }
}
