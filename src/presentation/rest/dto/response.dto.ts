import { ApiProperty } from '@nestjs/swagger';

export class ResponseDto {
  @ApiProperty({
    description: 'Response Code',
  })
  code?: string = 'OK';

  @ApiProperty({
    description: 'Response Message',
  })
  message?: string = '';
}
