import { Round } from './round';
import { Bar } from './bar';

export class NightOut {
  constructor (public id: number,
               public timestamp: number,
               public rounds: Round[] = []) {
  }

  getRoundById (roundId: number) {
    for (let round of this.rounds) {
      if (round.id === roundId) {
        return round;
      }
    }
    return null;
  }

  addRound (bar: Bar) {
    // API Call
    // POST: {userId}/rounds
    // BODY: {barId:number}
    // Returns: {id: number, timestamp: number}

    let id = this.rounds.length;
    let timestamp = Date.now();

    let round = new Round(
      id,
      bar,
      timestamp
    );

    this.rounds.push(round);

    return round;
  }

  removeRound (index: number) {
    // API Call
    // DELETE: {userId}/rounds/{roundId}
    // BODY: {barId:number}
    // Returns: {rounds:Rounds[]}
    this.rounds.splice(index, 1);
    return this.rounds;
  }

  getCost () {
    let cost = 0.00;

    for (let round of this.rounds) {
      cost += round.getCost();
    }

    return cost;
  }
}
