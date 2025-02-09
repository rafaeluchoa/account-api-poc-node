import { ApiProperty } from '@nestjs/swagger';

export class CreditRequestDto {
  @ApiProperty({
    description: 'Account Id',
    example: '9e0027d8-0f76-4e50-90b6-c36e94f0f09e',
  })
  accountId: string;

  @ApiProperty({
    description: 'Amount',
    example: '123.98',
  })
  amount: number;
}
