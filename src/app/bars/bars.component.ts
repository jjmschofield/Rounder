import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Nights Out');
  }

}
