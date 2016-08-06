import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'nights-out-detail',
  templateUrl: './nights-out-detail.component.html',
  styleUrls: ['./nights-out-detail.component.scss']
})
export class NightsOutDetailComponent implements OnInit {

  id:string;

  constructor(private route:ActivatedRoute) {}

  ngOnInit() {
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => this.id = id);
  }

}
