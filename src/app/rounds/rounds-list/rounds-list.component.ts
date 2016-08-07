import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';

import {Round} from '../../shared/models/round';

@Component({
  selector: 'rounds-list',
  templateUrl: './rounds-list.component.html',
  directives: [ROUTER_DIRECTIVES],
  styleUrls: ['./rounds-list.component.scss']
})
export class RoundsListComponent implements OnInit {

  @Input() rounds : Round[];
  @Output() onSelected = new EventEmitter<number>();

  constructor() {
    // Do stuff
  }

  ngOnInit() {

  }

  select(id:number){
    this.onSelected.emit(id);
  }

}
