import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { ProductModel } from '../../shared/models/product.model'
import { ProductService } from '../product.service'

@Component({
  selector: 'product-select',
  providers: [ProductService],
  pipes: [DecimalPipe],
  templateUrl: './product-select.component.html',
  styleUrls: ['./product-select.component.scss']
})
export class ProductSelectComponent implements OnInit {

  @Input() barId : number;
  @Output() onSelected = new EventEmitter<ProductModel>();

  products : ProductModel[] = [];

  constructor (private productService : ProductService) {
  }

  ngOnInit () {
    this.products = this.productService.getProductsByBarId(this.barId);
  }

  select (selectedProduct : ProductModel) {

    let productCopy = new ProductModel(
      selectedProduct.id,
      selectedProduct.name,
      selectedProduct.price,
      selectedProduct.qty,
      selectedProduct.imgUrl
    );

    this.onSelected.emit(productCopy);
  }

}
