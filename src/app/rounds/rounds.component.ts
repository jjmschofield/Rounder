import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

import { NightOutModel } from '../shared/models/night-out.model';
import { NightsOutService } from '../nights-out/nights-out.service';

import { RoundsCardListComponent } from './rounds-card-list';
import { NavBarComponent } from '../nav-bar';

@Component({
  selector: 'rounds',
  directives: [RoundsCardListComponent, NavBarComponent, ROUTER_DIRECTIVES],
  templateUrl: './rounds.component.html',
  styleUrls: ['./rounds.component.scss']
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

  hasRounds () {
    return this.nightOut.rounds.length > 0;
  }

  createRoundLabel () {
    if (this.hasRounds()) {
      return "Add Another Round";
    }
    else {
      return "Start a Round";
    }
  }

  createRound () {
    this.router.navigate(["/nights-out/", this.nightOut.id, "/rounds/create"]);
  }

  viewRound (roundId : number) {
    this.router.navigate(['/nights-out', this.nightOut.id, '/rounds', roundId]);
  }

  done () {
    this.router.navigate(this.backLink);
  }
}
