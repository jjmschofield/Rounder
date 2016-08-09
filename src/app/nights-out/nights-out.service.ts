import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NightOutModel } from './shared/models/night-out.model';

@Injectable()
export class NightsOutService {
  nightsOut : NightOutModel[] = [];
  currentNightOut : NightOutModel;

  constructor (private router : Router) {
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

  setCurrentNightOutById (id : number) {

    let nightOut : NightOutModel = this.getNightOutById(id);

    if (nightOut) {
      this.currentNightOut = nightOut;
      return this.currentNightOut;
    }

  }

  setCurrentNightOutFromParams (nightOutId : string, roundId? : string) {
    let success = false;
    let nightOut = this.setCurrentNightOutById(Number(nightOutId));

    if (nightOut) {
      if (typeof roundId === 'string') {
        success = this.testRoundExists(nightOut, roundId);
      }
      else {
        success = true;
      }
    }
    else {
      this.router.navigate(['/']);
    }

    return success;
  }

  private testRoundExists (nightOut : NightOutModel, roundId : string) {
    let exists = false;

    let round = nightOut.getRoundById(Number(roundId));

    if (round) {
      exists = true;
    }
    else {
      this.router.navigate(['/nights-out/', nightOut.id]);
    }

    return exists;
  }

}
