import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, StringExpressionOperatorReturningObject } from 'mongoose';
import { Twiddit } from './interfaces/twiddit.interface';
import { CreateTwidditDTO } from './dto/createTwiddit.dto';
import { UpdateTwidditDTO } from './dto/updateTwiddit.dto';

@Injectable()
export class TwidditService {
  constructor(@InjectModel('Twiddit') private twidditModel: Model<Twiddit>) {}

  async createTwiddit(createTwidditDTO: CreateTwidditDTO) {
    const createdTwiddit = new this.twidditModel(createTwidditDTO);
    return await createdTwiddit.save();
  }

  async getTwiddits(): Promise<Twiddit[]> {
    const twiddits = await this.twidditModel.find();
    return twiddits;
  }

  async getTwiddit(twidditId: string): Promise<Twiddit> {
    const twiddit = await this.twidditModel.findById(twidditId);
    if (!twiddit) {
      throw new HttpException(
        `Twiddit not found by ${twidditId} id`,
        HttpStatus.NOT_FOUND,
      );
    }
    return twiddit;
  }

  async deleteTwiddit(twidditId: string) {
    const twiddit = await this.twidditModel.findById(twidditId);
    if (!twiddit) {
      throw new HttpException(
        `Twiddit not found by ${twidditId} id`,
        HttpStatus.NOT_FOUND,
      );
    }
    return await this.twidditModel.findByIdAndDelete(twidditId);
  }

  async updateTwiddit(twidditId: string, updateTwidditDTO: UpdateTwidditDTO) {
    const twiddit = await this.twidditModel.findById(twidditId);
    if (!twiddit) {
      throw new HttpException(
        `Twiddit not found by ${twidditId} id`,
        HttpStatus.NOT_FOUND,
      );
    }
    return await this.twidditModel.findByIdAndUpdate(
      twidditId,
      updateTwidditDTO,
    );
  }
}
