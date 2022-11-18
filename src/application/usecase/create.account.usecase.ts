import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomUUID } from 'crypto';
import { Transactional } from 'typeorm-transactional';
import { Repository } from 'typeorm/repository/Repository';
import { Account } from '../../domain/model/account';

@Injectable()
export class CreateAccountUseCase {

    constructor(
        @InjectRepository(Account)
        readonly accountRepository: Repository<Account>
    ) { }

    @Transactional()
    async create(): Promise<Account> {
        const account = this.accountRepository.create({
            id: randomUUID(),
            balance: 0
        })
        await this.accountRepository.save(account)
        return account
    }
}
