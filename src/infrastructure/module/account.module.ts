import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountEntity } from '../repository/entity/account.entity';

import { AccountResolver } from '../../presentation/graphql/account.resolver';
import { AccountController } from '../../presentation/rest/account.controller';

import { CreateAccountUseCase } from '../../core/application/usecase/create.account.usecase';
import { SearchAccountUseCase } from '../../core/application/usecase/search.account.usecase';
import { BalanceEntity } from '../repository/entity/balance.entity';
import { TransactionEntity } from '../repository/entity/transaction.entity';
import { SearchBalanceUseCase } from '../../core/application/usecase/search.balance.usecase';
import { CreditBalanceUseCase } from '../../core/application/usecase/credit.balance.usecase';
import { BalanceController } from '../../presentation/rest/balance.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountEntity, BalanceEntity, TransactionEntity]),
  ],
  providers: [
    AccountResolver,
    SearchAccountUseCase,
    CreateAccountUseCase,
    SearchBalanceUseCase,
    CreditBalanceUseCase,
  ],
  controllers: [AccountController, BalanceController],
})
export class AccountModule {}
