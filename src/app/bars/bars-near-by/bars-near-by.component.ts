import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BarModel } from '../../shared/models/bar.model';
import { BarService } from '../bar.service';

@Component({
  selector: 'bars-near-by',
  templateUrl: './bars-near-by.component.html',
  providers: [BarService],
  styleUrls: ['./bars-near-by.component.scss']
})
export class BarsNearByComponent implements OnInit {

  @Output() onSelected = new EventEmitter<BarModel>();

  bars: BarModel[] = [];

  constructor (private barService: BarService) {
    this.bars = this.barService.getBars();
  }

  ngOnInit () {
  }

  select (bar: BarModel) {
    this.onSelected.emit(bar);
  }

}
