import { ApiProperty } from '@nestjs/swagger';

export class CreateAlbumDto {
  @ApiProperty({ default: 'Альбом #' })
  /* readonly title: string */
  title: string = 'Назв.Алб. #';

  @ApiProperty({ default: 'Аффтор #' })
  author: string = 'Аффтор #';

  @ApiProperty({ default: null })
  year: number = null;

  @ApiProperty({ default: 'Other #' })
  style: string = 'Other #';

  @ApiProperty({ default: './images' })
  path: string = './images';
}
