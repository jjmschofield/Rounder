import {Component, OnInit} from '@angular/core';
import {NightsOutListComponent} from '../nights-out-list';

@Component({
  selector: 'nights-out',
  directives: [NightsOutListComponent],
  templateUrl: './nights-out-overview.component.html',
  styleUrls: ['./nights-out-overview.component.scss']
})
export class NightsOutOverviewComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Nights Out');
  }

}
