import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NightOutModel } from '../../shared/models/night-out.model';
import { NightsOutCardComponent } from '../nights-out-card'

@Component({
  selector: 'nights-out-card-list',
  templateUrl: './nights-out-card-list.component.html',
  directives: [ROUTER_DIRECTIVES, NightsOutCardComponent],
  styleUrls: ['./nights-out-card-list.component.scss']
})
export class NightsOutCardListComponent implements OnInit {

  @Input() nightsOut : NightOutModel[];
  @Output() onSelected = new EventEmitter<number>();

  orderedNightsOut : NightOutModel[];

  constructor () {
  }

  ngOnInit () {
    this.orderNightsByDate();
  }

  select (nightOut : NightOutModel) {
    this.onSelected.emit(nightOut.id);
  }

  orderNightsByDate () { //Orders by date desc
    this.orderedNightsOut = this.nightsOut.sort((nightOut1 : NightOutModel, nightOut2 : NightOutModel) => nightOut2.timestamp - nightOut1.timestamp);
  }

}
