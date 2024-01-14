import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { Account } from '../../domain/model/account';

@Injectable()
export class SearchAccountUseCase {

    constructor(
        @InjectRepository(Account)
        readonly accountRepository: Repository<Account>
    ) { }

    async list(): Promise<Account[]> {
        return await this.accountRepository.find();
    }

    async find(id: string): Promise<Account> {
        return await this.accountRepository.findOneBy({id: id });
    }
}
