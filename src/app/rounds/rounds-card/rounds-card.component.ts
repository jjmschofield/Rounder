import { Component, OnInit, Input} from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { RoundModel } from '../../shared/models/round.model';

@Component({
  selector: 'rounds-card',
  templateUrl: './rounds-card.component.html',
  directives: [ROUTER_DIRECTIVES],
  pipes: [DatePipe, DecimalPipe],
  styleUrls: ['./rounds-card.component.scss']
})
export class RoundsCardComponent implements OnInit {

  @Input() round : RoundModel;

  constructor () {
  }

  ngOnInit () {
  }


}
