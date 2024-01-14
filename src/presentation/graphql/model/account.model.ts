import { ObjectType, Field } from '@nestjs/graphql';
import { Account } from '../../../core/domain/model/account';

@ObjectType()
export class AccountModel {
  @Field()
  id: string;

  @Field({ nullable: true })
  createdAt?: Date;

  @Field()
  balance: number;

  @Field()
  customerId: string;

  constructor(data: Account) {
    this.id = data.id;
    this.createdAt = data.createdAt;
    this.balance = data.balance;
    this.customerId = data.customerId
  }
}