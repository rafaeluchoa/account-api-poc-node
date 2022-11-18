import { ApiProperty } from '@nestjs/swagger';
import { Account } from "../../../domain/model/account";

export class AccountDto {

  @ApiProperty({
      description: 'UUID',
      example: '9e0027d8-0f76-4e50-90b6-c36e94f0f09e',
    })
  id: String;

  @ApiProperty({
      description: 'Balance',
      example: '0.0',
    })
  balance: Number;

  @ApiProperty({
    description: 'Created Date',
    example: '2022-01-01T19:17:52.885Z'
  })
  createdAt?: Date;
  
  constructor(account: Account) {
    this.id = account.id
    this.balance = account.balance
    this.createdAt = account.createdAt
  }
}
