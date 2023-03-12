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
    const numberOfTwidditDislike =
      await this.dislikeService.getDislikesOfTwiddit(twidditId);
    return numberOfTwidditDislike;
  }

  @Get('/dislikes-comment/:commentId')
  async getDislikesOfComment(@Param('commentId') commentId: object) {
    const numberOfCommentDislike =
      await this.dislikeService.getDislikesOfComment(commentId);
    return numberOfCommentDislike;
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
