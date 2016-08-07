export class ProductModel {
  constructor (public id: number, // TODO - This is sometimes SERIAL in SQL schema
               public name: string,
               public price: number,
               public qty: number = 1,
               public imgUrl?: string) {
  }

  increaseQty () {
    this.qty++;
    return this;
  }

  decreaseQty () {
    this.qty--;
    return this;
  }

  setQty (qty: number) {
    this.qty = qty;
  }

  getCost () {
    return this.qty * this.price;
  }
}
