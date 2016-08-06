import {Component, OnInit} from '@angular/core';
import {BarsNearByComponent} from '../../bars/bars-near-by';

@Component({
  selector: 'rounds-create',
  templateUrl: './rounds-create.component.html',
  directives: [BarsNearByComponent],
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
