export class Round {
  constructor(
    public id: number, //TODO - This is sometimes SERIAL in SQL schema, is this an issue?
    public barId: number,
    public timestamp: number, //TODO - is TIMESTAMP === UNIX TIMESTAMP?
    public imgUrl?: string
  ) {  }
}
