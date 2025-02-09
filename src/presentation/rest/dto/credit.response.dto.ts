import { ApiProperty } from '@nestjs/swagger';
import { TransactionDto } from './transaction.dto';
import { ResponseDto } from './response.dto';

export class CreditResponseDto extends ResponseDto {
  @ApiProperty({
    description: 'Transaction effected',
    type: TransactionDto,
  })
  transaction: TransactionDto;
}
