import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Balance } from '../../domain/model/balance';

@Injectable()
export class SearchBalanceUseCase {
  constructor(
    @InjectRepository(Balance)
    readonly balanceRepository: Repository<Balance>,
  ) {}

  async findByAccount(accountId: string): Promise<Balance> {
    return await this.balanceRepository.findOneBy({ accountId: accountId });
  }
}
