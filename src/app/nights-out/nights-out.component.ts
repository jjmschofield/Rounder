import {Component, OnInit} from '@angular/core';
import {NightsOutListComponent} from './nights-out-list'

@Component({
  selector: 'nights-out',
  directives: [NightsOutListComponent],
  templateUrl: './nights-out.component.html',
  styleUrls: ['./nights-out.component.scss']
})
export class NightsOutComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Nights Out');
  }

}
