import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Twiddit } from '../twiddit/interfaces/twiddit.interface';
import { Reply } from '../reply/interfaces/reply.interface';
import { Like } from '../like/interfaces/like.interface';
import { Dislike } from '../dislike/interfaces/dislike.interface';

@Injectable()
export class InfoTwidditService {
  constructor(
    @InjectModel('Twiddit') private twidditModel: Model<Twiddit>,
    @InjectModel('Reply') private replyModel: Model<Reply>,
    @InjectModel('Like') private likeModel: Model<Like>,
    @InjectModel('Dislike') private dislikeModel: Model<Dislike>,
  ) {}

  async getInfoTwiddits(twidditid: any) {
    const twiddit = await this.twidditModel.findById(twidditid);
    console.log(Object.getOwnPropertyNames(twiddit));
    const replies = await this.replyModel.find({ twidditId: twidditid });
    const like = await this.likeModel.find({ twidditId: twidditid });
    const dislike = await this.dislikeModel.find({ twidditId: twidditid });
    let isRetwiddit = false;
    let originalTwiddit = {};

    if (twiddit.hasOwnProperty('retwidditId')) {
      isRetwiddit = true;
      originalTwiddit = await this.getInfoTwiddits(
        twiddit.retwidditId.toString(),
      );
    }
    /* isRetwiddit = true;
    originalTwiddit = await this.getInfoTwiddits(twiddit.retwidditId); */

    const infoTwiddit = {
      twiddit,
      number_of_replies: replies.length,
      replies,
      number_of_likes: like.length,
      like,
      number_of_dislikes: dislike.length,
      dislike,
      isRetwiddit,
      ...(isRetwiddit && { originalTwiddit }),
    };

    if (twiddit === null) {
      throw new HttpException(
        `Twiddit not found by ${twidditid} id`,
        HttpStatus.NOT_FOUND,
      );
    }

    return infoTwiddit;
  }

  async getUserTwiddits(userid: object) {
    const twiddits = await this.twidditModel.find({ userId: userid });
    const userTwiddits: any = [];

    if (twiddits.length === 0) {
      throw new HttpException(
        `Twiddits not found for user ${userid} id`,
        HttpStatus.NOT_FOUND,
      );
    }

    for (const i in twiddits) {
      const toPush = await this.getInfoTwiddits(twiddits[i]._id.toString());
      userTwiddits.push(toPush);
    }

    return userTwiddits;
  }

  async getcommunidditTwiddits(communidditid: object) {
    const twiddits = await this.twidditModel.find({
      communidditsId: communidditid,
    });
    const communidditTwiddits: any = [];

    if (twiddits.length === 0) {
      throw new HttpException(
        `Twiddits not found for communiddit ${communidditid} id`,
        HttpStatus.NOT_FOUND,
      );
    }

    for (const i in twiddits) {
      const toPush = await this.getInfoTwiddits(twiddits[i]._id.toString());
      communidditTwiddits.push(toPush);
    }

    return communidditTwiddits;
  }

  async getTwidditsByTag(tag: string) {
    const twiddits = await this.twidditModel.find({
      tags: tag,
    });
    const twidditsTag: any = [];

    if (twiddits.length === 0) {
      throw new HttpException(
        `Twiddits not found for tag: ${tag}`,
        HttpStatus.NOT_FOUND,
      );
    }

    for (const i in twiddits) {
      const toPush = await this.getInfoTwiddits(twiddits[i]._id.toString());
      twidditsTag.push(toPush);
    }

    return twidditsTag;
  }
}
