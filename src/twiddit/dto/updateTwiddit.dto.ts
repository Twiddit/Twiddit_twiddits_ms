//validar que se envia entre cliente y servidor

export class UpdateTwidditDTO {
  userId?: number;
  communidditsId?: object;
  retwidditId?: object;
  text?: string;
  creationDate?: Date;
  imageURL1?: string;
  imageURL2?: string;
  imageURL3?: string;
  imageURL4?: string;
  videoURL?: string;
  tags?: Array<string>;
}
