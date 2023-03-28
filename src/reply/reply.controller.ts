import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ReplyService } from './reply.service';
import { CreateReplyDTO } from './dto/createReply.dto';
import { UpdateReplyDTO } from './dto/updateReply.dto';

@Controller('reply')
export class ReplyController {
  constructor(private replyService: ReplyService) {}

  @Get('/')
  async getReplies() {
    const replies = await this.replyService.getReplies();
    return replies;
  }

  @Get('/:replyId')
  async getReply(@Param('replyId') replyId: string) {
    const reply = await this.replyService.getReply(replyId);
    return reply;
  }

  @Get('/replies-twiddit/:twidditId')
  async getRepliesOfTwiddit(@Param('twidditId') twidditId: object) {
    const replies = await this.replyService.getRepliesOfTwiddit(twidditId);
    return replies;
  }

  @Get('/number-replies-twiddit/:twidditId')
  async getNumberRepliesOfTwiddit(@Param('twidditId') twidditId: object) {
    const replies = await this.replyService.getRepliesOfTwiddit(twidditId);
    return replies.length;
  }

  @Get('/replies-reply/:replyId')
  async getRepliesOfReply(@Param('replyId') replyId: object) {
    const replies = await this.replyService.getRepliesOfReply(replyId);
    return replies;
  }

  @Get('/number-replies-reply/:replyId')
  async getNumberRepliesOfReply(@Param('replyId') replyId: object) {
    const replies = await this.replyService.getRepliesOfReply(replyId);
    return replies.length;
  }

  @Post('/')
  async createReply(@Body() createReplyDTO: CreateReplyDTO) {
    const replyCreated = await this.replyService.createReply(createReplyDTO);
    return replyCreated;
  }

  @Put('/:replyId')
  async updateReply(
    @Param('replyId') replyId: string,
    @Body() updateReplyDTO: UpdateReplyDTO,
  ) {
    const replyUpdated = await this.replyService.updateReply(
      replyId,
      updateReplyDTO,
    );
    return replyUpdated;
  }

  @Delete('/:replyId')
  async deleteReply(@Param('replyId') replyId: string) {
    const replyDeleted = await this.replyService.deleteReply(replyId);
    return replyDeleted;
  }
}
