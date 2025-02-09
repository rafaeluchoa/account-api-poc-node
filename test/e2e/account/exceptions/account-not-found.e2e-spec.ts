import 'jest';
import { CreditRequestDto } from '../../../../src/presentation/rest/dto/credit.request.dto';
import { CreditResponseDto } from '../../../../src/presentation/rest/dto/credit.response.dto';
import { post } from '../../base/setup';
import { AccountNotFoundException } from '../../../../src/core/exception/AccountNotFoundException';

describe('Account Not Found', () => {
  it('Create Account', async () => {
    const response = (await post('/api/balance/credit', {
      accountId: '99999999999',
    } as CreditRequestDto)) as CreditResponseDto;

    expect(response.code).toEqual(AccountNotFoundException.CODE);
    expect(response.message).not.toBeNull();
  });
});
