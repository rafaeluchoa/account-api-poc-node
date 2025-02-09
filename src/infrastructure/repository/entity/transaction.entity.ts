import { EntitySchema } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Transaction } from '../../../core/domain/model/transaction';

export const TransactionEntity = new EntitySchema<Transaction>({
  name: 'Transaction',
  tableName: 'transaction',
  target: Transaction,
  columns: {
    ...BaseEntity,
    accountId: {
      type: 'text',
    },
    transactionType: {
      type: 'text',
    },
    amount: {
      type: 'decimal',
    },
  },
  orderBy: {
    createdAt: 'ASC',
  },
});
