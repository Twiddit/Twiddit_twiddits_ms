//ayudar ts a escribir codigo

import { Document } from 'mongoose';

export interface Reply extends Document {
  userId: number;
  threadId?: object;
  twidditId: object;
  text?: string;
  creationDate: Date;
  imageURL1?: string;
  imageURL2?: string;
  imageURL3?: string;
  imageURL4?: string;
  videoURL?: string;
}
