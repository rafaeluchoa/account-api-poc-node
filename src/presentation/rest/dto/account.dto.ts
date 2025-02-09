import { ApiProperty } from '@nestjs/swagger';

export class AccountDto {
  @ApiProperty({
    description: 'UUID',
    example: '9e0027d8-0f76-4e50-90b6-c36e94f0f09e',
  })
  id: string;

  @ApiProperty({
    description: 'UUID',
    example: '9e0027d8-0f76-4e50-90b6-c36e94f0f09e',
  })
  customerId: string;

  @ApiProperty({
    description: 'Created Date',
    example: '2022-01-01T19:17:52.885Z',
  })
  createdAt: Date;
}
