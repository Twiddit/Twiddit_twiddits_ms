//validar que se envia entre cliente y servidor

export class CreateLikeDTO {
  userId: number;
  creationDate: Date;
  twidditId?: object;
  replyId?: object;
}
