import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwidditModule } from './twiddit/twiddit.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TwidditModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27020/twiddits-microservice'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
