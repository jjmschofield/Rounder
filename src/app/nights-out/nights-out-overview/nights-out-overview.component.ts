import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NightsOutListComponent } from '../nights-out-list';
import { NightsOutService } from '../nights-out.service';
import { NightOut } from '../../shared/models/nightOut';

@Component({
  selector: 'nights-out',
  directives: [NightsOutListComponent],
  templateUrl: './nights-out-overview.component.html',
  styleUrls: ['./nights-out-overview.component.scss']
})
export class NightsOutOverviewComponent implements OnInit {

  nightsOut: NightOut[] = [];

  constructor (private nightsOutService: NightsOutService,
               private router: Router) {
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

}
