import { EntitySchema } from 'typeorm';
import { Balance } from '../../../core/domain/model/balance';
import { BaseEntity } from './base.entity';

export const BalanceEntity = new EntitySchema<Balance>({
  name: 'Balance',
  tableName: 'balance',
  target: Balance,
  columns: {
    ...BaseEntity,
    accountId: {
      type: 'text',
    },
    current: {
      type: 'numeric',
    },
  },
  orderBy: {
    createdAt: 'ASC',
  },
});
