import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { AccountEntity } from '../../domain/model/account.entity';

@Injectable()
export class SearchAccountUseCase {

    constructor(
        @InjectRepository(AccountEntity)
        readonly accountRepository: Repository<AccountEntity>
    ) { }

    async list(): Promise<AccountEntity[]> {
        this.accountRepository.create()
        return await this.accountRepository.find()
    }
}
