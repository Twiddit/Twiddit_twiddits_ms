//definir esquema de los datos a guardar dentro de mongodb

import { Schema } from 'mongoose';

export const DislikeSchema = new Schema({
  userId: {
    type: Number,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
  twidditId: Object,
  replyId: Object,
});
