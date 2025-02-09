import { Account } from '../../../core/domain/model/account';
import { AccountDto } from '../dto/account.dto';

declare module '../../../core/domain/model/account' {
  export interface Account {
    toAccountDto(): AccountDto;
  }
}

Account.prototype.toAccountDto = function () {
  return {
    id: this.id,
    customerId: this.customerId,
    createdAt: this.createdAt,
  };
};
