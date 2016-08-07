import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Bar } from '../../shared/models/bar';
import { BarService } from '../bar.service';

@Component({
  selector: 'bars-near-by',
  templateUrl: './bars-near-by.component.html',
  providers: [BarService],
  styleUrls: ['./bars-near-by.component.scss']
})
export class BarsNearByComponent implements OnInit {

  @Output() onSelected = new EventEmitter<Bar>();

  bars: Bar[] = [];

  constructor (private barService: BarService) {
    this.bars = this.barService.getBars();
  }

  ngOnInit () {
  }

  select (bar: Bar) {
    this.onSelected.emit(bar);
  }

}
