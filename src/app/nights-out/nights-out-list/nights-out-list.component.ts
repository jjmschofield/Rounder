import {Component, OnInit, Input} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {NightOut} from '../../shared/models/nightOut'

@Component({
  selector: 'nights-out-list',
  templateUrl: './nights-out-list.component.html',
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ['./nights-out-list.component.scss']
})
export class NightsOutListComponent implements OnInit {

  @Input() nightsOut: NightOut[];

  constructor() {}

  ngOnInit() {}

}
