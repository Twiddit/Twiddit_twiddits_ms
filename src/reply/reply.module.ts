import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReplyService } from './reply.service';
import { ReplyController } from './reply.controller';
import { ReplySchema } from './schema/reply.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Reply', schema: ReplySchema }]),
  ],
  providers: [ReplyService],
  controllers: [ReplyController],
})
export class ReplyModule {}
