import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { DislikeService } from './dislike.service';
import { CreateDislikeDTO } from './dto/createDislikedto';

@Controller('dislike')
export class DislikeController {
  constructor(private dislikeService: DislikeService) {}

  @Get('/')
  async getDislikes() {
    const dislikes = await this.dislikeService.getDislikes();
    return dislikes;
  }

  @Get('/:dislikeId')
  async getDislike(@Param('dislikeId') dislikeId: string) {
    const dislike = await this.dislikeService.getDislike(dislikeId);
    return dislike;
  }

  @Get('/dislikes-twiddit/:twidditId')
  async getDislikesOfTwiddit(@Param('twidditId') twidditId: object) {
    const twidditDislike = await this.dislikeService.getDislikesOfTwiddit(
      twidditId,
    );
    return twidditDislike;
  }

  @Get('/number-dislikes-twiddit/:twidditId')
  async getNumberOfDislikesOfTwiddit(@Param('twidditId') twidditId: object) {
    const twidditDislike = await this.dislikeService.getDislikesOfTwiddit(
      twidditId,
    );
    return twidditDislike.length;
  }

  @Get('/dislikes-reply/:replyId')
  async getDislikesOfReply(@Param('replyId') replyId: object) {
    const replyDislike = await this.dislikeService.getDislikesOfReply(replyId);
    return replyDislike;
  }

  @Get('/number-dislikes-reply/:replyId')
  async getNumberOfDislikesOfReply(@Param('replyId') replyId: object) {
    const replyDislike = await this.dislikeService.getDislikesOfReply(replyId);
    return replyDislike.length;
  }

  @Post('/')
  async createDislike(@Body() createDislikeDTO: CreateDislikeDTO) {
    const dislikeCreated = await this.dislikeService.createDislike(
      createDislikeDTO,
    );
    return dislikeCreated;
  }

  @Delete('/:dislikeId')
  async deleteDislike(@Param('dislikeId') dislikeId: string) {
    const dislikeDeleted = await this.dislikeService.deleteDislike(dislikeId);
    return dislikeDeleted;
  }
}
