import { ApiProperty } from '@nestjs/swagger';

export class CreateRequestDto {
  @ApiProperty({
    description: 'Customer Id',
    example: '9e0027d8-0f76-4e50-90b6-c36e94f0f09e',
  })
  customerId: string;
}
