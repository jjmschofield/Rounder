import { Component, OnInit, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { RoundModel } from '../../../shared/models/round.model';
import { ProductModel } from '../../../shared/models/product.model';

@Component({
  selector: 'product-list',
  pipes: [DecimalPipe],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() round : RoundModel;
  products : ProductModel[] = [];

  constructor () {
  }

  ngOnInit () {
    this.products = this.round.products;
  }

  decreaseQty (product : ProductModel) {
    if (product.qty > 1) {
      product.decreaseQty();
    }
    else {
      this.round.products.forEach((roundProduct, index) => {
        if (product === roundProduct) {
          this.round.removeProduct(index);
        }
      });
    }
  }


}
