import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Balance } from '../../domain/model/balance';
import { Transactional } from 'typeorm-transactional';
import { Repository } from 'typeorm/repository/Repository';
import { SearchBalanceUseCase } from './search.balance.usecase';
import { Transaction } from '../../domain/model/transaction';
import { randomUUID } from 'crypto';
import { TransactionType } from '../../domain/model/transaction.type';
import { SearchAccountUseCase } from './search.account.usecase';

@Injectable()
export class CreditBalanceUseCase {
  constructor(
    private readonly searchUseCase: SearchBalanceUseCase,
    private readonly searchAccountUseCase: SearchAccountUseCase,
    @InjectRepository(Balance)
    private readonly balanceRepository: Repository<Balance>,
    @InjectRepository(Transaction)
    private readonly transactionRepository: Repository<Transaction>,
  ) {}

  @Transactional()
  async credit(accountId: string, amount: number) {
    const account = await this.searchAccountUseCase.find(accountId);

    let balance = await this.searchUseCase.findByAccount(accountId);
    balance.credit(amount);
    balance = await this.balanceRepository.save(balance);

    let transaction = this.transactionRepository.create({
      id: randomUUID(),
      createdAt: new Date(),
      accountId: accountId,
      transactionType: TransactionType.Credit,
      amount: amount,
    });
    transaction = await this.transactionRepository.save(transaction);

    return { transaction, balance, account };
  }
}
