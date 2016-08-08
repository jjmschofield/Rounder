import { ProductModel } from './product.model';
import { BarModel } from './bar.model';

export class RoundModel {
  constructor (public id : number, // TODO - This is sometimes SERIAL in SQL schema, is this an issue?
               public bar : BarModel,
               public timestamp : number, // TODO - is TIMESTAMP === UNIX TIMESTAMP?
               public products : ProductModel[] = []) {
  }

  // save(){ // TODO - make an API call to save this model to the api
  //
  //   //API Call
  //   //POST: {userId}/rounds/{roundId}
  //   //BODY: {round:RoundModel}
  //   //Returns: {round:RoundModel}
  //
  //
  // }

  addProduct (product : ProductModel) {

    let existingProduct = this.findExistingProduct(product);

    if(existingProduct){
      existingProduct.increaseQty();
    }
    else{
      this.products.push(product);
    }

    return this.products;
  }

  removeProduct (index : number) {
    this.products.splice(index, 1);
    return this.products;
  }

  getCost () {
    let cost = 0;

    for (let product of this.products) {
      cost += product.getCost();
    }

    return cost;
  }

  findExistingProduct(product: ProductModel){
    for (let existingProduct of this.products){
      if(existingProduct.id === product.id){
        return existingProduct;
      }
    }
    return null;
  }
}
