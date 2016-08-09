import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nights-out',
  templateUrl: './nights-out.component.html',
  styleUrls: ['./nights-out.component.scss']
})
export class NightsOutComponent implements OnInit {

  constructor () {
    // Do stuff
  }

  ngOnInit () {
    console.log('Hello Nights Out');
  }

}
