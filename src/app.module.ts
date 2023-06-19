import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwidditModule } from './twiddit/twiddit.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LikeModule } from './like/like.module';
import { DislikeModule } from './dislike/dislike.module';
import { ReplyModule } from './reply/reply.module';
import { ConfigModule } from '@nestjs/config';
import { InfoTwidditModule } from './info-twiddit/info-twiddit.module';

//local -> mongodb://127.0.0.1:27020/twiddits-microservice
//docker -> mongodb://twiddits:twidditsPassword@twiddits_db:27017/twiddits_microservice_bd?authSource=admin'
//mongodb+srv://twiddits:hQ65ugUrX4SbLo5U@twiddits.dwb0sl7.mongodb.net/?retryWrites=true&w=majority
//mongodb+srv://test:test@cluster0.vyh0anc.mongodb.net/?retryWrites=true&w=majority

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://twiddit:12345@34.81.212.38:27017/?authSource=admin'),
    TwidditModule,
    LikeModule,
    DislikeModule,
    ReplyModule,
    InfoTwidditModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
