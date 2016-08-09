import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input() title : string = 'Rounder';
  @Input() backLink : string[] = [];
  @Input() showBackButton : boolean = false;


  constructor (private router : Router) {
  }

  ngOnInit () {
  }


  goBack () {
    this.router.navigate(this.backLink);
  }


}
