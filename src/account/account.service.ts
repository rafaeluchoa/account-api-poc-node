import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { Transactional } from 'typeorm-transactional';
import { Repository } from 'typeorm/repository/Repository';
import { AccountEntity } from './account.entity';

@Injectable()
export class AccountService {

    constructor(
        @InjectRepository(AccountEntity)
        readonly accountRepository: Repository<AccountEntity>
    ) { }

    @Transactional()
    async list(): Promise<AccountEntity[]> {
        this.accountRepository.create()
        return await this.accountRepository.find()
    }

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
