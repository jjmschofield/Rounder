import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DecimalPipe } from '@angular/common';



import { ProductModel } from '../../../shared/models/product.model'
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
  modalOpen : boolean = false;

  constructor (private productService : ProductService) {
  }

  ngOnInit () {
    this.products = this.productService.getProductsByBarId(this.barId);
  }

  public openList() {
    if(!this.modalOpen) {
      //TODO - this is being done as ng-bootstrap at time of writing has not implement modals
      this.addModalOpenToBody(); //We have to manipulate the dom directly to create the correct scrolling behavior
      this.modalOpen = true;
    }
  }

  closeList(){
    this.removeModalOpenFromBody();
    this.modalOpen = false;
  }

  select (selectedProduct : ProductModel) {

    this.closeList();

    let productCopy = new ProductModel(
      selectedProduct.id,
      selectedProduct.name,
      selectedProduct.price,
      selectedProduct.qty,
      selectedProduct.imgUrl
    );

    this.onSelected.emit(productCopy);
  }

  private addModalOpenToBody(){
    if(document.body.className.indexOf('modal-open') < 1){
      if(document.body.className.length > 0){
        document.body.className+= ' ' + 'modal-open';
      }
      else{
        document.body.className+= 'modal-open';
      }
    }
  }

  private removeModalOpenFromBody(){
    document.body.className = document.body.className.replace(/\s?modal-open/g,'');
  }


}
