import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { SearchAccountUseCase } from '../../application/usecase/search.account.usecase';
import { CreateAccountUseCase } from '../../application/usecase/create.account.usecase';
import { AccountDto } from './dto/account.dto';
import { CreateRequestDto } from './dto/create.request.dto';
import { CreateResponseDto } from './dto/create.response.dto';

@Controller('api/account')
export class AccountController {
  constructor(
    private readonly searchUseCase: SearchAccountUseCase,
    private readonly createUseCase: CreateAccountUseCase
  ) {}

  @Get()
  async list(): Promise<AccountDto[]> {
    const data = await this.searchUseCase.list();
    return data.map(i => new AccountDto(i));
  }

  @Post()
  @ApiOperation({
    summary: 'Creates a Account',
  })
  @ApiCreatedResponse({ type: CreateResponseDto })
  async create(
    @Body() req: CreateRequestDto
  ): Promise<CreateResponseDto> {
    const data = await this.createUseCase.create()
    return {
      account: data 
    }
  }
}
