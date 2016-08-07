import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { BarModel } from '../../shared/models/bar.model';
import { NightsOutService } from '../../nights-out/nights-out.service';
import { BarsNearByComponent } from '../../bars/bars-near-by';
import { BarsSearchComponent } from '../../bars/bars-search';

@Component({
  selector: 'rounds-create',
  templateUrl: './rounds-create.component.html',
  directives: [BarsNearByComponent, BarsSearchComponent],
  styleUrls: ['./rounds-create.component.scss']
})
export class RoundsCreateComponent implements OnInit {

  nightOutIdSub : any;

  constructor (private nightsOutService : NightsOutService,
               private router : Router,
               private route : ActivatedRoute) {
  }

  ngOnInit () {
    this.nightOutIdSub = this.route.params.subscribe(params => {
      let id = params['nightOutId'];
      this.nightsOutService.setCurrentNightOutById(id);
    });
  }

  ngOnDestroy () {
    this.nightOutIdSub.unsubscribe();
  }

  selectBar (bar : BarModel) {
    let nightOutId : number = this.nightsOutService.currentNightOut.id;
    let round = this.nightsOutService.getNightOutById(nightOutId).addRound(bar);
    let link = ['/nights-out', nightOutId, '/rounds', round.id];
    this.router.navigate(link);
  }


}
