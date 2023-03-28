import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reply } from './interfaces/reply.interface';
import { CreateReplyDTO } from './dto/createReply.dto';
import { UpdateReplyDTO } from './dto/updateReply.dto';

@Injectable()
export class ReplyService {
  constructor(@InjectModel('Reply') private replyModel: Model<Reply>) {}

  async createReply(createReplyDTO: CreateReplyDTO) {
    const createdReply = new this.replyModel(createReplyDTO);
    return await createdReply.save();
  }

  async getReplies(): Promise<Reply[]> {
    const replies = await this.replyModel.find();
    return replies;
  }

  async getReply(replyId: string): Promise<Reply> {
    const reply = await this.replyModel.findById(replyId);
    if (!reply) {
      throw new HttpException(
        `Reply not found by ${replyId} id`,
        HttpStatus.NOT_FOUND,
      );
    }
    return reply;
  }

  async deleteReply(replyId: string) {
    const reply = await this.replyModel.findById(replyId);
    if (!reply) {
      throw new HttpException(
        `Reply not found by ${replyId} id`,
        HttpStatus.NOT_FOUND,
      );
    }
    return await this.replyModel.findByIdAndDelete(replyId);
  }

  async updateReply(replyId: string, updateReplyDTO: UpdateReplyDTO) {
    const reply = await this.replyModel.findById(replyId);
    if (!reply) {
      throw new HttpException(
        `Reply not found by ${replyId} id`,
        HttpStatus.NOT_FOUND,
      );
    }
    return await this.replyModel.findByIdAndUpdate(replyId, updateReplyDTO);
  }

  async getRepliesOfTwiddit(twidditid: object) {
    const replies = await this.replyModel.find({ twidditId: twidditid });
    return replies;
  }

  async getRepliesOfReply(replyid: object) {
    const replies = await this.replyModel.find({ threadId: replyid });
    return replies;
  }
}
