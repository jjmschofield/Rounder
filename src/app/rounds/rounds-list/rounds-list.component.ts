import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { RoundModel } from '../../shared/models/round.model';

@Component({
  selector: 'rounds-list',
  templateUrl: './rounds-list.component.html',
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ['./rounds-list.component.scss']
})
export class RoundsListComponent implements OnInit {

  @Input() rounds: RoundModel[];
  @Output() onSelected = new EventEmitter<number>();

  constructor () {
    // Do stuff
  }

  ngOnInit () {

  }

  select (id: number) {
    this.onSelected.emit(id);
  }

}
