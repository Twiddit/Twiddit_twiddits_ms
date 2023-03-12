import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Like } from './interfaces/like.interface';
import { CreateLikeDTO } from './dto/createLikedto';

@Injectable()
export class LikeService {
  constructor(@InjectModel('Like') private likeModel: Model<Like>) {}

  async createLike(createLikeDTO: CreateLikeDTO) {
    const createdLike = new this.likeModel(createLikeDTO);
    return await createdLike.save();
  }

  async deleteLike(likeId: string) {
    const like = await this.likeModel.findById(likeId);
    if (!like) {
      throw new HttpException(
        `Like with ${likeId} id does not exist`,
        HttpStatus.NOT_FOUND,
      );
    }
    return await this.likeModel.findByIdAndDelete(likeId);
  }

  async getLikes(): Promise<Like[]> {
    const likes = await this.likeModel.find();
    return likes;
  }

  async getLike(likeId: string): Promise<Like> {
    const like = await this.likeModel.findById(likeId);
    if (!like) {
      throw new HttpException(
        `Like with ${likeId} id does not exist`,
        HttpStatus.NOT_FOUND,
      );
    }
    return like;
  }

  async getLikesOfTwiddit(twidditid: object) {
    const like = await this.likeModel.find({ twidditId: twidditid });
    return like.length;
  }

  async getLikesOfReply(replyid: object) {
    const like = await this.likeModel.find({ replyId: replyid });
    return like.length;
  }
}
