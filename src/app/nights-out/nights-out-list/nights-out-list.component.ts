import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  selector: 'nights-out-list',
  templateUrl: './nights-out-list.component.html',
  directives: [ROUTER_DIRECTIVES],
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
