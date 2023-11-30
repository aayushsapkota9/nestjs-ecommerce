import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDTO {
  @ApiProperty({
    example: 'rehmat.sayani@gmail.com',
    required: true,
  })
  name: string;
  description: string;
  price: number;
  category: string;
}
