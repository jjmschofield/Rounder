import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NightOut } from '../shared/models/nightOut';

@Injectable()
export class NightsOutService {
  nightsOut: NightOut[] = [];
  currentNightOut: NightOut;

  constructor (private router: Router) {
  }

  setCurrentNightOutById (id: number) { // TODO - this feels awkward here, maybe a nav service?

    let nightOut: NightOut = this.getNightOutById(id);

    if (nightOut) {
      this.currentNightOut = nightOut;
      return this.currentNightOut;
    }

    this.router.navigate(['/']);

  }

  createNightOut () {
    let nightOut = new NightOut(
      this.nightsOut.length,
      Date.now()
    );

    this.nightsOut.push(nightOut);

    return nightOut;
  }

  getNightOutById (id: number) {

    for (let nightOut of this.nightsOut) {
      if (nightOut.id === id) {
        return nightOut;
      }
    }

    return null;
  }

}
