import { Injectable } from '@angular/core';

import { ProductMock } from '../../../shared/models/product.mock';


@Injectable()
export class ProductService {

  getProductsByBarId (barId : number) {
    return ProductMock;
  }

}
