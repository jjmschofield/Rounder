import {Component, OnInit} from '@angular/core';
import {BarsNearByComponent} from '../../bars/bars-near-by';
import {BarsSearchComponent} from '../../bars/bars-search';

@Component({
  selector: 'rounds-create',
  templateUrl: './rounds-create.component.html',
  directives: [BarsNearByComponent,BarsSearchComponent],
  styleUrls: ['./rounds-create.component.scss']
})
export class RoundsCreateComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Bars Near By');
  }

}
