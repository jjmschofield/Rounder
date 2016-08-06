import {Component, OnInit} from '@angular/core';
import {NgbdTypeaheadBasic} from '../ui/typeahead-basic';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  directives: [NgbdTypeaheadBasic],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
