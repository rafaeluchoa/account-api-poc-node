import { AccountDto } from './account.dto';
import { ApiProperty } from '@nestjs/swagger';
import { ResponseDto } from './response.dto';

export class CreateResponseDto extends ResponseDto {
  @ApiProperty({
    description: 'Account Created',
    type: AccountDto,
  })
  account: AccountDto;
}
