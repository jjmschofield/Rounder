import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { NightOutModel } from '../../shared/models/night-out.model';

@Component({
  selector: 'nights-out-list',
  templateUrl: './nights-out-list.component.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: [DatePipe, DecimalPipe],
  styleUrls: ['./nights-out-list.component.scss']
})
export class NightsOutListComponent implements OnInit {

  @Input() nightsOut : NightOutModel[];
  @Output() onSelected = new EventEmitter<number>();

  orderedNightsOut: NightOutModel[];

  constructor () {
  }

  ngOnInit () {
    this.orderNightsByDate();
  }

  select(nightOut:NightOutModel){
    this.onSelected.emit(nightOut.id);
  }

  orderNightsByDate(){ //Orders by date desc
    this.orderedNightsOut = this.nightsOut.sort((nightOut1: NightOutModel,nightOut2: NightOutModel) => nightOut2.timestamp - nightOut1.timestamp);
  }

}
