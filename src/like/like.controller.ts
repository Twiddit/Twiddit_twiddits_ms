import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { LikeService } from './like.service';
import { CreateLikeDTO } from './dto/createLikedto';

@Controller('like')
export class LikeController {
  constructor(private likeService: LikeService) {}

  @Get('/')
  async getLikes() {
    const likes = await this.likeService.getLikes();
    return likes;
  }

  @Get('/:likeId')
  async getLike(@Param('likeId') likeId: string) {
    const like = await this.likeService.getLike(likeId);
    return like;
  }

  @Get('/likes-twiddit/:twidditId')
  async getLikesOfTwiddit(@Param('twidditId') twidditId: object) {
    const twidditLikes = await this.likeService.getLikesOfTwiddit(twidditId);
    return twidditLikes;
  }

  @Get('/number-likes-twiddit/:twidditId')
  async getNumberOfLikesOfTwiddit(@Param('twidditId') twidditId: object) {
    const numberOfTwidditLikes =
      await this.likeService.getNumberOfLikesOfTwiddit(twidditId);
    return numberOfTwidditLikes;
  }

  @Get('/likes-reply/:replyId')
  async getLikesOfReply(@Param('replyId') replyId: object) {
    const replyLikes = await this.likeService.getLikesOfReply(replyId);
    return replyLikes;
  }

  @Get('/number-likes-reply/:replyId')
  async getNumberLikesOfReply(@Param('replyId') replyId: object) {
    const numberOfReplyLikes = await this.likeService.getNumberOfLikesOfReply(
      replyId,
    );
    return numberOfReplyLikes;
  }

  @Post('/')
  async createLike(@Body() createLikeDTO: CreateLikeDTO) {
    const likeCreated = await this.likeService.createLike(createLikeDTO);
    return likeCreated;
  }

  @Delete('/:likeId')
  async deleteLike(@Param('likeId') likeId: string) {
    const likeDeleted = await this.likeService.deleteLike(likeId);
    return likeDeleted;
  }
}
