import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

import { RoundModel } from '../../shared/models/round.model';
import { RoundsListComponent } from '../../rounds/rounds-list';
import { NightsOutService } from '../../nights-out/nights-out.service';

@Component({
  selector: 'nights-out-detail',
  directives: [RoundsListComponent, ROUTER_DIRECTIVES],
  templateUrl: './nights-out-detail.component.html',
  styleUrls: ['./nights-out-detail.component.scss']
})
export class NightsOutDetailComponent implements OnInit {

  nightOutIdSub: any;
  nightOutId: number;
  rounds: RoundModel[];

  constructor (private nightsOutService: NightsOutService,
               private router: Router,
               private route: ActivatedRoute) {
  }

  ngOnInit () {
    this.nightOutIdSub = this.route.params.subscribe(params => {
      let id = params['nightOutId'];

      let nightOut = this.nightsOutService.setCurrentNightOutById(id);

      if (nightOut) {
        this.nightOutId = this.nightsOutService.currentNightOut.id;
        this.rounds = this.nightsOutService.currentNightOut.rounds;
      }
    });
  }

  ngOnDestroy () {
    this.nightOutIdSub.unsubscribe();
  }

  showPreviousRounds () {
    return this.rounds.length > 0;
  }

  viewRound (roundId: number) {
    this.router.navigate(['/nights-out', this.nightOutId, '/rounds', roundId]);
  }
}
