import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavBarComponent } from '../nav-bar';

import { NightsOutCardListComponent } from './nights-out-card-list';
import { NightsOutService } from './nights-out.service';
import { NightOutModel } from '../shared/models/night-out.model';

@Component({
  selector: 'nights-out',
  directives: [NightsOutCardListComponent, NavBarComponent],
  templateUrl: './nights-out.component.html',
  styleUrls: ['./nights-out.component.scss']
})
export class NightsOutComponent implements OnInit {

  nightsOut : NightOutModel[] = [];

  constructor (private nightsOutService : NightsOutService,
               private router : Router) {
  }

  ngOnInit () {
    this.nightsOut = this.nightsOutService.nightsOut;
  }

  startNightOut () {
    let nightOut = this.nightsOutService.createNightOut();
    let link = ['/nights-out', nightOut.id];
    this.router.navigate(link);
  }

  showPreviousNightsOut () {
    return this.nightsOut.length > 0;
  }

  gotoNightOutDetail(nightOutId:number){
    this.router.navigate(['/nights-out/',nightOutId]);
  }
}

