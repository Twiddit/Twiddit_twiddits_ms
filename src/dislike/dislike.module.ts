import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DislikeService } from './dislike.service';
import { DislikeController } from './dislike.controller';
import { DislikeSchema } from './schema/dislike.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Dislike', schema: DislikeSchema }]),
  ],
  providers: [DislikeService],
  controllers: [DislikeController],
})
export class DislikeModule {}
