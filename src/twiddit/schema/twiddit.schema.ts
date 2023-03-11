//definir esquema de los datos a guardar dentro de mongodb

import { Schema } from 'mongoose';

export const TwidditsSchema = new Schema({
  userId: {
    type: Number,
    required: true,
  },
  comunnidditsId: Object,
  retwidditId: Object,
  text: String,
  creationDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  imageURL1: String,
  imageURL2: String,
  imageURL3: String,
  imageURL4: String,
  videoURL: String,
  tags: Array,
});
