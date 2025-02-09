import { Args, Query, Resolver } from '@nestjs/graphql';
import { SearchAccountUseCase } from '../../core/application/usecase/search.account.usecase';
import { AccountModel } from './model/account.model';

@Resolver(() => AccountModel)
export class AccountResolver {
  constructor(private readonly searchUseCase: SearchAccountUseCase) {}

  @Query(() => AccountModel)
  async account(@Args('id') id: string): Promise<AccountModel> {
    const data = await this.searchUseCase.find(id);
    return new AccountModel(data);
  }
}
