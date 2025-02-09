import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { CreateAccountUseCase } from '../../core/application/usecase/create.account.usecase';
import { SearchAccountUseCase } from '../../core/application/usecase/search.account.usecase';
import { AccountApi } from '../api/account.api';
import { AccountDto } from './dto/account.dto';
import { CreateRequestDto } from './dto/create.request.dto';
import { CreateResponseDto } from './dto/create.response.dto';
import './ext/account.ext';

@Controller('api/account')
export class AccountController implements AccountApi {
  constructor(
    private readonly searchUseCase: SearchAccountUseCase,
    private readonly createUseCase: CreateAccountUseCase,
  ) {}

  @Get()
  async list(): Promise<AccountDto[]> {
    const data = await this.searchUseCase.list();
    return data.map((i) => i.toAccountDto());
  }

  @Post('create')
  @ApiOperation({
    summary: 'Creates a Account',
  })
  @ApiCreatedResponse({ type: CreateResponseDto })
  async create(@Body() req: CreateRequestDto): Promise<CreateResponseDto> {
    const data = await this.createUseCase.create(req.customerId);
    return {
      account: data.toAccountDto(),
    };
  }
}
