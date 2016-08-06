import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'nights-out-list',
  templateUrl: './nights-out-list.component.html',
  styleUrls: ['./nights-out-list.component.scss']
})
export class NightsOutListComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Nights Out List');
  }

}
