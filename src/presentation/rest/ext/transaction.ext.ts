import { Account } from '../../../core/domain/model/account';
import { Balance } from '../../../core/domain/model/balance';
import { Transaction } from '../../../core/domain/model/transaction';
import { TransactionDto } from '../dto/transaction.dto';

declare module '../../../core/domain/model/transaction' {
  export interface Transaction {
    toTransactionDto(account: Account, balance: Balance): TransactionDto;
  }
}

Transaction.prototype.toTransactionDto = function (
  account: Account,
  balance: Balance,
) {
  return {
    id: this.id,
    transactionDate: this.createdAt,
    transactionType: this.transactionType,
    customerId: account.customerId,
    accountId: this.accountId,
    amount: this.amount,
    balance: balance.current,
  };
};
