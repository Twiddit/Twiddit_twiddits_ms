import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TwidditModule } from './twiddit/twiddit.module';

@Module({
  imports: [TwidditModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
