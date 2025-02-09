import { AccountDto } from 'src/presentation/rest/dto/account.dto';
import { CreateRequestDto } from '../../../src/presentation/rest/dto/create.request.dto';
import { CreateResponseDto } from '../../../src/presentation/rest/dto/create.response.dto';
import { post } from '../base/setup';
import { randomUUID } from 'crypto';

export async function accountCreate(
  customerId: string = randomUUID(),
): Promise<AccountDto> {
  const response = (await post('/api/account/create', {
    customerId: customerId,
  } as CreateRequestDto)) as CreateResponseDto;
  return response.account;
}
