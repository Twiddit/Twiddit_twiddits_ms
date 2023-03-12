//ayudar ts a escribir codigo

import { Document } from 'mongoose';

export interface Like extends Document {
  userId: number;
  creationDate: Date;
  twidditId?: object;
  commentId?: object;
}
