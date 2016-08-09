import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DecimalPipe } from '@angular/common';

import { NightsOutService } from '../../nights-out/nights-out.service';

import { RoundModel } from '../../shared/models/round.model';
import { ProductModel } from '../../shared/models/product.model';

import { ProductSelectComponent } from '../../products/product-select';
import { NavBarComponent } from '../../nav-bar';


@Component({
  selector: 'rounds-detail',
  templateUrl: './rounds-detail.component.html',
  directives: [ProductSelectComponent, NavBarComponent],
  pipes: [DecimalPipe],
  styleUrls: ['./rounds-detail.component.scss']
})
export class RoundsDetailComponent implements OnInit {

  paramsSub : any;
  round : RoundModel;
  title : string = "Your Round";
  backLink : string[] = [];

  @ViewChild(ProductSelectComponent)
  private productSelectComponent : ProductSelectComponent;

  constructor (private nightsOutService : NightsOutService,
               private route : ActivatedRoute) {

  }

  ngOnInit () {
    this.paramsSub = this.route.params.subscribe(params => {
      let nightOutId = params['nightOutId'];
      let roundId = params['roundId'];

      if(this.nightsOutService.setCurrentNightOutFromParams(nightOutId,roundId)){
        this.round = this.nightsOutService.currentNightOut.getRoundById(Number(roundId));
        this.backLink = ['/nights-out',nightOutId]
      }

    });
  }

  ngOnDestroy () {
    this.paramsSub.unsubscribe();
  }

  openProductList () {
    this.productSelectComponent.openList();
  }

  addProduct (product : ProductModel) {
    this.round.addProduct(product);
  }

  decreaseQty (product : ProductModel) {
    if (product.qty > 1) {
      product.decreaseQty();
    }
    else {
      this.round.products.forEach((roundProduct, index) => { // TODO - this should be abstracted further
        if (product === roundProduct) {
          this.round.removeProduct(index);
        }
      });
    }
  }

}
