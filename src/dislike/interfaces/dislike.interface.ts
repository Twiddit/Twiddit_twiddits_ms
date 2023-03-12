//ayudar ts a escribir codigo

import { Document } from 'mongoose';

export interface Dislike extends Document {
  userId: number;
  creationDate: Date;
  twidditId?: object;
  replyId?: object;
}
