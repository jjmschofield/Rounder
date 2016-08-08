import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NightOutModel } from '../shared/models/night-out.model';

@Injectable()
export class NightsOutService {
  nightsOut : NightOutModel[] = [];
  currentNightOut : NightOutModel;

  constructor (private router : Router) {
  }

  setCurrentNightOutById (id : number) { // TODO - this feels awkward here, maybe a nav service?

    let nightOut : NightOutModel = this.getNightOutById(id);

    if (nightOut) {
      this.currentNightOut = nightOut;
      return this.currentNightOut;
    }

    this.router.navigate(['/']);

  }

  createNightOut () {
    let nightOut = new NightOutModel(
      this.nightsOut.length,
      Date.now()
    );

    this.nightsOut.push(nightOut);

    return nightOut;
  }

  getNightOutById (id : number) {

    for (let nightOut of this.nightsOut) {
      if (nightOut.id == id) {
        return nightOut;
      }
    }

    return null;
  }

}
