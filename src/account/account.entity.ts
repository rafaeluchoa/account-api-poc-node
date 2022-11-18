import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name: 'account'})
export class AccountEntity {

  @PrimaryColumn()
  public id: string;

  @Column()
  public balance: number;  
  
}
