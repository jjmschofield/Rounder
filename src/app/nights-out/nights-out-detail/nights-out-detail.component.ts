import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';
import {RoundsListComponent} from '../../rounds/rounds-list';

@Component({
  selector: 'nights-out-detail',
  directives: [RoundsListComponent, ROUTER_DIRECTIVES],
  templateUrl: './nights-out-detail.component.html',
  styleUrls: ['./nights-out-detail.component.scss']
})
export class NightsOutDetailComponent implements OnInit {

  id:string;

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .map(params => params['nightOutId'])
      .subscribe((id) => this.id = id);
  }

}
