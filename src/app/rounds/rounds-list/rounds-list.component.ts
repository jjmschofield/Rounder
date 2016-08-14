import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { RoundModel } from '../../shared/models/round.model';
import { RoundsCardComponent } from '../rounds-card';

@Component({
  selector: 'rounds-list',
  templateUrl: './rounds-list.component.html',
  directives: [ROUTER_DIRECTIVES, RoundsCardComponent],
  pipes: [DatePipe, DecimalPipe],
  styleUrls: ['./rounds-list.component.scss']
})
export class RoundsListComponent implements OnInit {

  @Input() rounds : RoundModel[];
  @Output() onSelected = new EventEmitter<number>();

  orderedRounds : RoundModel[];

  constructor () {
  }

  ngOnInit () {
    this.orderRoundsByDate();
  }

  select (id : number) {
    this.onSelected.emit(id);
  }

  orderRoundsByDate () { //Orders by date desc
    this.orderedRounds = this.rounds.sort((round1 : RoundModel, round2 : RoundModel) => round2.timestamp - round1.timestamp);
  }

}
