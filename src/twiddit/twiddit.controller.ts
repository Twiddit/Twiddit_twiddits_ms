import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TwidditService } from './twiddit.service';
import { CreateTwidditDTO } from './dto/createTwiddit.dto';
import { UpdateTwidditDTO } from './dto/updateTwiddit.dto';

@Controller('twiddit')
export class TwidditController {
  constructor(private twidditService: TwidditService) {}

  @Get('/')
  async getTwiddits() {
    const twiddits = await this.twidditService.getTwiddits();
    return twiddits;
  }

  @Get('/:twidditId')
  async getTwiddit(@Param('twidditId') twidditId: string) {
    const twiddit = await this.twidditService.getTwiddit(twidditId);
    return twiddit;
  }

  @Post('/')
  async createTwiddit(@Body() createTwidditDTO: CreateTwidditDTO) {
    const twidditCreated = await this.twidditService.createTwiddit(
      createTwidditDTO,
    );
    return twidditCreated;
  }

  @Put('/:twidditId')
  async updateTwiddit(
    @Param('twidditId') twidditId: string,
    @Body() updateTwidditDTO: UpdateTwidditDTO,
  ) {
    const twidditUpdated = await this.twidditService.updateTwiddit(
      twidditId,
      updateTwidditDTO,
    );
    return twidditUpdated;
  }

  @Delete('/:twidditId')
  async deleteTwiddit(@Param('twidditId') twidditId: string) {
    const twidditDeleted = await this.twidditService.deleteTwiddit(twidditId);
    return twidditDeleted;
  }
}
