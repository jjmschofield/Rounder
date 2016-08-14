import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

import { NavBarComponent } from '../../nav-bar';

import { NightOutModel } from '../shared/models/night-out.model';

import { RoundsListComponent } from '../rounds/rounds-list';
import { NightsOutService } from '../../nights-out/nights-out.service';

@Component({
  selector: 'nights-out-detail',
  directives: [RoundsListComponent, ROUTER_DIRECTIVES, NavBarComponent],
  templateUrl: './nights-out-detail.component.html',
  styleUrls: ['./nights-out-detail.component.scss']
})
export class NightsOutDetailComponent implements OnInit, OnDestroy {

  paramsSub : any;
  nightOut : NightOutModel;
  title : string = 'Your Night Out';
  backLink : string[] = ['/nights-out'];

  constructor (private nightsOutService : NightsOutService,
               private router : Router,
               private route : ActivatedRoute) {

  }

  ngOnInit () {
    this.paramsSub = this.route.params.subscribe(params => {
      let nightOutId = params['nightOutId'];
      this.nightsOutService.setCurrentNightOutFromParams(nightOutId);
      this.nightOut = this.nightsOutService.currentNightOut;
    });
  }

  ngOnDestroy () {
    this.paramsSub.unsubscribe();
  }

  showPreviousRounds () {
    return this.nightOut.rounds.length > 0;
  }

  createRound () {
    this.router.navigate(["/nights-out/", this.nightOut.id, "/rounds/create"]);
  }

  viewRound (roundId : number) {
    this.router.navigate(['/nights-out', this.nightOut.id, '/rounds', roundId]);
  }

  done(){
    this.router.navigate(this.backLink);
  }
}
