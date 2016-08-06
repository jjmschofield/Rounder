import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'rounds-detail',
  templateUrl: './rounds-detail.component.html',
  styleUrls: ['./rounds-detail.component.scss']
})
export class RoundsDetailComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Bars Near By');
  }

}
