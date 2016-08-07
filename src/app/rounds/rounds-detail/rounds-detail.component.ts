import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { NightsOutService } from '../../nights-out/nights-out.service';
import { RoundModel } from '../../shared/models/round.model';

@Component({
  selector: 'rounds-detail',
  templateUrl: './rounds-detail.component.html',
  styleUrls: ['./rounds-detail.component.scss']
})
export class RoundsDetailComponent implements OnInit {

  nightOutIdSub: any;
  rounds: RoundModel[];

  constructor (private nightsOutService: NightsOutService,
               private router: Router,
               private route: ActivatedRoute) {
  }

  ngOnInit () {
    this.nightOutIdSub = this.route.params.subscribe(params => {
      let id = params['nightOutId'];
      this.nightsOutService.setCurrentNightOutById(id);
      this.rounds = this.nightsOutService.currentNightOut.rounds;
    });
  }

}
