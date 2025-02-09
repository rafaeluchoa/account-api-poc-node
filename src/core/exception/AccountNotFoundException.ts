import { BusinessException } from './BusinessException';

export class AccountNotFoundException extends BusinessException {
  public static readonly CODE = 'ACC_NOT_FOUND';

  constructor(accountId: string) {
    super(AccountNotFoundException.CODE, `Account Not Found: ${accountId}`);
  }
}
