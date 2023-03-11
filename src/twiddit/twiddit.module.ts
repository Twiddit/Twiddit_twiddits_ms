import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TwidditService } from './twiddit.service';
import { TwidditController } from './twiddit.controller';
import { TwidditsSchema } from './schema/twiddit.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Twiddit', schema: TwidditsSchema }]),
  ],
  providers: [TwidditService],
  controllers: [TwidditController],
})
export class TwidditModule {}
