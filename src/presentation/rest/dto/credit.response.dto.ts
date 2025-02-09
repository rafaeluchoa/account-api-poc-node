import { ApiProperty } from '@nestjs/swagger';
import { TransactionDto } from './transaction.dto';

export class CreditResponseDto {
  @ApiProperty({
    description: 'Transaction effected',
    type: TransactionDto,
  })
  transaction: TransactionDto;
}
