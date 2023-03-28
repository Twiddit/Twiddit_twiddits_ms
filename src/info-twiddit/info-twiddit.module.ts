import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { InfoTwidditController } from './info-twiddit.controller';
import { InfoTwidditService } from './info-twiddit.service';
import { TwidditsSchema } from '../twiddit/schema/twiddit.schema';
import { ReplySchema } from '../reply/schema/reply.schema';
import { LikeSchema } from '../like/schema/like.schema';
import { DislikeSchema } from '../dislike/schema/dislike.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Twiddit', schema: TwidditsSchema }]),
    MongooseModule.forFeature([{ name: 'Reply', schema: ReplySchema }]),
    MongooseModule.forFeature([{ name: 'Like', schema: LikeSchema }]),
    MongooseModule.forFeature([{ name: 'Dislike', schema: DislikeSchema }]),
  ],
  controllers: [InfoTwidditController],
  providers: [InfoTwidditService],
})
export class InfoTwidditModule {}
