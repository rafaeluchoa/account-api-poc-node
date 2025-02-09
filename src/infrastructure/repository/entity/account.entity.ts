import { EntitySchema } from 'typeorm';
import { Account } from '../../../core/domain/model/account';
import { BaseEntity } from './base.entity';

export const AccountEntity = new EntitySchema<Account>({
  name: 'Account',
  tableName: 'account',
  target: Account,
  columns: {
    ...BaseEntity,
    customerId: {
      type: 'text',
    },
  },
  orderBy: {
    createdAt: 'ASC',
  },
});
