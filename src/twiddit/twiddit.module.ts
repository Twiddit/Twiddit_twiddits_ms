import { Module } from '@nestjs/common';
import { TwidditService } from './twiddit.service';
import { TwidditController } from './twiddit.controller';

@Module({
  providers: [TwidditService],
  controllers: [TwidditController]
})
export class TwidditModule {}
