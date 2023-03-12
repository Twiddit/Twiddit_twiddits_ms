//validar que se envia entre cliente y servidor

export class CreateDislikeDTO {
  userId: number;
  creationDate: Date;
  twidditId?: object;
  commentId?: object;
}
