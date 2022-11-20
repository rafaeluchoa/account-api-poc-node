import { Args, Query, Resolver } from '@nestjs/graphql';
import { AccountModel } from './model/account.model';
import { SearchAccountUseCase } from '../../application/usecase/search.account.usecase'

@Resolver(of => AccountModel)
export class AccountResolver {
  constructor(private readonly searchUseCase: SearchAccountUseCase) {}

  @Query(result => AccountModel)
  async account(@Args('id') id: string): Promise<AccountModel> {
    const data = await this.searchUseCase.find(id)
    return new AccountModel(data);
  }
}