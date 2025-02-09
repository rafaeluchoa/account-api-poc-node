import { AccountDto } from './account.dto';
import { ApiProperty } from '@nestjs/swagger';

export class CreateResponseDto {
  @ApiProperty({
    description: 'Account Created',
    type: AccountDto,
  })
  account: AccountDto;
}
