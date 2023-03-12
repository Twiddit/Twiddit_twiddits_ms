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
    const numberOfTwidditLikes = await this.likeService.getLikesOfTwiddit(
      twidditId,
    );
    return numberOfTwidditLikes;
  }

  @Get('/likes-comment/:commentId')
  async getLikesOfComment(@Param('commentId') commentId: object) {
    const numberOfCommentLikes = await this.likeService.getLikesOfComment(
      commentId,
    );
    return numberOfCommentLikes;
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
