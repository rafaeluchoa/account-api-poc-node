import { ApiProperty } from '@nestjs/swagger';

export class TransactionDto {
  @ApiProperty({
    description: 'UUID',
    example: '9e0027d8-0f76-4e50-90b6-c36e94f0f09e',
  })
  id: string;

  @ApiProperty({
    description: 'Transaction Date',
    example: '2022-01-01T19:17:52.885Z',
  })
  transactionDate: Date;

  @ApiProperty({
    description: 'Transaction Type',
    example: 'D or C or T',
  })
  transactionType: string;

  @ApiProperty({
    description: 'UUID',
    example: '9e0027d8-0f76-4e50-90b6-c36e94f0f09e',
  })
  customerId: string;

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

  @ApiProperty({
    description: 'Balance after transaction',
    example: '0.0',
  })
  balance: number;
}
