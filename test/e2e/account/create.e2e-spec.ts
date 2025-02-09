import { randomUUID } from 'crypto';
import 'jest';
import { CreateRequestDto } from '../../../src/presentation/rest/dto/create.request.dto';
import { CreateResponseDto } from '../../../src/presentation/rest/dto/create.response.dto';
import { post } from '../base/setup';

describe('Account', () => {
  it('Create Account', async () => {
    const customerId = randomUUID();

    const response = (await post('/api/account/create', {
      customerId: customerId,
    } as CreateRequestDto)) as CreateResponseDto;

    expect(response.account.id).toBeTruthy();
    expect(response.account.createdAt).toBeTruthy();
  });
});
