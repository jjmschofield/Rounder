import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NavBarComponent } from '../../../nav-bar';

import { BarModel } from '../../shared/models/bar.model';
import { BarsNearByComponent } from '../bars/bars-near-by';

import { NightsOutService } from '../../../nights-out/nights-out.service';

@Component({
  selector: 'rounds-create',
  templateUrl: './rounds-create.component.html',
  directives: [BarsNearByComponent, NavBarComponent],
  styleUrls: ['./rounds-create.component.scss']
})
export class RoundsCreateComponent implements OnInit {

  paramSub : any;
  title : string = 'Start a Round';
  backLink : string[] = [];

  constructor (private nightsOutService : NightsOutService,
               private router : Router,
               private route : ActivatedRoute) {
  }

  ngOnInit () {
    this.paramSub = this.route.params.subscribe(params => {
      let nightOutId = params['nightOutId'];
      this.nightsOutService.setCurrentNightOutFromParams(nightOutId);
      this.backLink = ['/nights-out/', nightOutId]
    });
  }

  ngOnDestroy () {
    this.paramSub.unsubscribe();
  }

  selectBar (bar : BarModel) {
    let nightOutId : number = this.nightsOutService.currentNightOut.id;
    let round = this.nightsOutService.getNightOutById(nightOutId).addRound(bar);
    let link = ['/nights-out', nightOutId, '/rounds', round.id];
    this.router.navigate(link);
  }


}
