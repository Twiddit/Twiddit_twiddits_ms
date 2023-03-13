import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwidditModule } from './twiddit/twiddit.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LikeModule } from './like/like.module';
import { DislikeModule } from './dislike/dislike.module';
import { ReplyModule } from './reply/reply.module';

@Module({
  imports: [
    TwidditModule,
    MongooseModule.forRoot(
      'mongodb://username:password@twiddits_db:27017/twiddits_microservice_bd?authSource=admin',
    ),
    LikeModule,
    DislikeModule,
    ReplyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
