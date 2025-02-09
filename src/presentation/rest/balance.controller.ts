import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { CreditBalanceUseCase } from '../../core/application/usecase/credit.balance.usecase';
import { CreateResponseDto } from './dto/create.response.dto';
import { CreditRequestDto } from './dto/credit.request.dto';
import { CreditResponseDto } from './dto/credit.response.dto';
import './ext/transaction.ext';

@Controller('api/balance')
export class BalanceController {
  constructor(private readonly creditUseCase: CreditBalanceUseCase) {}

  @Post('credit')
  @ApiOperation({
    summary: 'Credit',
  })
  @ApiCreatedResponse({ type: CreateResponseDto })
  async credit(@Body() req: CreditRequestDto): Promise<CreditResponseDto> {
    const { transaction, balance, account } = await this.creditUseCase.credit(
      req.accountId,
      req.amount,
    );
    return {
      transaction: transaction.toTransactionDto(account, balance),
    };
  }
}
