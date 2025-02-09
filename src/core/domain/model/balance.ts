export class Balance {
  id: string;
  createdAt: Date;
  accountId: string;
  current: number;

  credit(amount: number) {
    // TODO amount > 0: throw InvalidAmount
    this.current = parseFloat((this.current + amount).toString());
  }
}
