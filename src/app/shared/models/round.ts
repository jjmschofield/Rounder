import {Product} from './product'
import {Bar} from './bar'

export class Round {
  constructor(
    public id: number, //TODO - This is sometimes SERIAL in SQL schema, is this an issue?
    public bar: Bar,
    public timestamp: number, //TODO - is TIMESTAMP === UNIX TIMESTAMP?
    public products: Product[] = []
  ) {  }

  // save(){ //TODO - make an API call to save this model to the api
  //
  //   //API Call
  //   //POST: {userId}/rounds/{roundId}
  //   //BODY: {round:Round}
  //   //Returns: {round:Round}
  //
  //
  // }

  addProduct(product:Product){
    this.products.push(product);
    return this.products;
  }

  removeProduct(index:number){
    this.products.splice(index, 1);
    return this.products;
  }

  getCost(){
    let cost = 0;

    for(let product of this.products){
      cost += product.getCost();
    }

    return cost;
  }
}
