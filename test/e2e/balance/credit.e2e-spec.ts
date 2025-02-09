import 'jest';
import { TransactionType } from '../../../src/core/domain/model/transaction.type';
import { CreditRequestDto } from '../../../src/presentation/rest/dto/credit.request.dto';
import { CreditResponseDto } from '../../../src/presentation/rest/dto/credit.response.dto';
import { accountCreate } from '../account/account.fixture';
import { post } from '../base/setup';

describe('Balance', () => {
  it('Credit and verify balance', async () => {
    const account = await accountCreate();
    const amount = 123.99;

    const response = (await post('/api/balance/credit', {
      accountId: account.id,
      amount: amount,
    } as CreditRequestDto)) as CreditResponseDto;

    expect(response.transaction).toBeTruthy();

    const transaction = response.transaction;

    expect(transaction.id).toBeTruthy();
    expect(transaction.transactionDate).toBeTruthy();
    expect(transaction.transactionType).toEqual(
      TransactionType.Credit.toString(),
    );
    expect(transaction.customerId).toEqual(account.customerId);
    expect(transaction.accountId).toEqual(account.id);
    expect(transaction.amount).toEqual(amount);
    expect(transaction.balance).toEqual(amount);
  });
});
