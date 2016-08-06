export class Product {
  constructor(
    public id: number, //TODO - This is sometimes SERIAL in SQL schema
    public name: string,
    public price: number,
    public imgUrl?: string
  ) {  }
}
