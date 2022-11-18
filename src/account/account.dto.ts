import { AccountEntity } from "./account.entity";
import { ApiProperty } from '@nestjs/swagger';

export class AccountDto {

  @ApiProperty({
      description: 'UUID',
      example: '',
    })
  id: string;

  @ApiProperty({
      description: 'Balance',
      example: '0',
    })
  balance: number;
  
  constructor(account: AccountEntity) {
    this.id = account.id
    this.balance = account.balance
  }
}
