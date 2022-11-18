import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { Transactional } from 'typeorm-transactional';
import { Repository } from 'typeorm/repository/Repository';
import { AccountEntity } from '../../domain/model/account.entity';

@Injectable()
export class CreateAccountUseCase {

    constructor(
        @InjectRepository(AccountEntity)
        readonly accountRepository: Repository<AccountEntity>
    ) { }

    @Transactional()
    async create(): Promise<AccountEntity> {
        const account = this.accountRepository.create({
            id: randomUUID(),
            balance: 0
        })
        await this.accountRepository.save(account)
        return account
    }
}
