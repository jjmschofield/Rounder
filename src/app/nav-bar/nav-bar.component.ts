import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() title : string = 'Rounder';
  @Input() backLink : string[];
  @Input() action : () => void;
  @Input() actionLabel : string = "Done";

  constructor (private router : Router) {
  }

  ngOnInit () {
  }


  goBack () {
    this.router.navigate(this.backLink);
  }


}
