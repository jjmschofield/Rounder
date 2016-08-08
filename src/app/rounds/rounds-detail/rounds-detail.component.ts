import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DecimalPipe } from '@angular/common';

import { NightsOutService } from '../../nights-out/nights-out.service';
import { RoundModel } from '../../shared/models/round.model';
import { ProductSelectComponent } from '../../products/product-select';
import { ProductModel } from '../../shared/models/product.model'

@Component({
  selector: 'rounds-detail',
  templateUrl: './rounds-detail.component.html',
  directives: [ProductSelectComponent],
  pipes: [DecimalPipe],
  styleUrls: ['./rounds-detail.component.scss']
})
export class RoundsDetailComponent implements OnInit {

  nightOutIdSub : any;
  round : RoundModel;

  constructor (private nightsOutService : NightsOutService,
               private router : Router,
               private route : ActivatedRoute) {
  }

  ngOnInit () {
    this.nightOutIdSub = this.route.params.subscribe(params => {
      let nightOutId = params['nightOutId'];
      let roundId = params['roundId'];
      this.round = this.nightsOutService.getNightOutById(nightOutId).getRoundById(roundId);
    });
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
