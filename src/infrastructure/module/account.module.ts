
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountEntity } from '../repository/entity/account.entity';

import { AccountController } from '../../presentation/rest/account.controller';
import { AccountResolver } from 'src/presentation/graphql/account.resolver';

import { SearchAccountUseCase } from '../../application/usecase/search.account.usecase';
import { CreateAccountUseCase } from '../../application/usecase/create.account.usecase';


@Module({
  imports: [TypeOrmModule.forFeature([AccountEntity])],
  providers: [AccountResolver, SearchAccountUseCase, CreateAccountUseCase],
  controllers: [AccountController],
})
export class AccountModule {}
