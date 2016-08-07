import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

import {NightsOutService} from '../../nights-out/nights-out.service';
import {Round} from '../../shared/models/round';

@Component({
  selector: 'rounds-detail',
  templateUrl: './rounds-detail.component.html',
  styleUrls: ['./rounds-detail.component.scss']
})
export class RoundsDetailComponent implements OnInit {

  nightOutIdSub: any;
  rounds :Round[];

  constructor(private nightsOutService:NightsOutService,
              private router:Router,
              private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.nightOutIdSub = this.route.params.subscribe(params => {
      let id = params['nightOutId'];
      this.nightsOutService.setCurrentNightOutById(id);
      this.rounds = this.nightsOutService.currentNightOut.rounds;
    });
  }

}
