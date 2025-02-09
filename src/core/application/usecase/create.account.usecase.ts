import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { Balance } from '../../domain/model/balance';
import { Transactional } from 'typeorm-transactional';
import { Repository } from 'typeorm/repository/Repository';
import { Account } from '../../domain/model/account';

@Injectable()
export class CreateAccountUseCase {
  constructor(
    @InjectRepository(Account)
    readonly accountRepository: Repository<Account>,
    @InjectRepository(Balance)
    readonly balanceRepository: Repository<Balance>,
  ) {}

  @Transactional()
  async create(customerId: string): Promise<Account> {
    const account = this.accountRepository.create({
      id: randomUUID(),
      createdAt: new Date(),
      customerId: customerId,
    });
    await this.accountRepository.save(account);

    const balance = this.balanceRepository.create({
      id: randomUUID(),
      createdAt: new Date(),
      accountId: account.id,
      current: 0.0,
    });
    await this.balanceRepository.save(balance);

    return account;
  }
}
