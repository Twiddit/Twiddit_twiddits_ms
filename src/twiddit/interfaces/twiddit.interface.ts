//ayudar ts a escribir codigo

import { Document } from 'mongoose';

export interface Twiddit extends Document {
  userId: number;
  comunnidditsId?: object;
  retwidditId?: object;
  text?: string;
  creationDate: Date;
  imageURL1?: string;
  imageURL2?: string;
  imageURL3?: string;
  imageURL4?: string;
  videoURL?: string;
  tags?: Array<string>;
}
