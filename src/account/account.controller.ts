import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiOperation, ApiCreatedResponse } from '@nestjs/swagger';
import { AccountService } from './account.service';
import { AccountDto } from './account.dto';
import { CreateRequestDto } from './create.request.dto';
import { CreateResponseDto } from './create.response.dto';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  async list(): Promise<AccountDto[]> {
    const data = await this.accountService.list();
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
    const data = await this.accountService.create()
    return {
      account: data 
    }
  }
}
