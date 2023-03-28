import { Controller, Get, Param } from '@nestjs/common';
import { InfoTwidditService } from './info-twiddit.service';

@Controller('info-twiddit')
export class InfoTwidditController {
  constructor(private infoTwidditService: InfoTwidditService) {}

  @Get('/:twidditId')
  async getInfoTwiddit(@Param('twidditId') twidditId: object) {
    return await this.infoTwidditService.getInfoTwiddits(twidditId);
  }

  @Get('/user/:userId')
  async getUserInfoTwiddit(@Param('userId') userId: object) {
    return await this.infoTwidditService.getUserTwiddits(userId);
  }

  @Get('/communiddit/:communidditId')
  async getComunniddtInfoTwiddit(
    @Param('communidditId') communidditId: object,
  ) {
    return await this.infoTwidditService.getcommunidditTwiddits(communidditId);
  }

  @Get('/tag/:tag')
  async getTwidditsByTag(@Param('tag') tag: string) {
    return await this.infoTwidditService.getTwidditsByTag(tag);
  }
}
