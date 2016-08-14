import { Component, OnInit, Input } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { NightOutModel } from '../shared/models/night-out.model';

@Component({
  selector: 'nights-out-card',
  templateUrl: './nights-out-card.component.html',
  pipes: [DatePipe, DecimalPipe],
  styleUrls: ['./nights-out-card.component.scss']
})
export class NightsOutCardComponent implements OnInit {

  @Input() nightOut : NightOutModel;

  constructor () {  }

  ngOnInit () {
  }

}
