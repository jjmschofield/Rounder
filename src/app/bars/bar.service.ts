import { Injectable } from '@angular/core';
import { BarModel } from '../shared/models/bar.model';
import { BarMock } from '../shared/models/bar.mock';

@Injectable()
export class BarService {
  bars : BarModel[] = BarMock;

  getBars () {
    return this.bars;
  }

  getBarById (id : number) {
    for (let bar of this.bars) {
      if (bar.id === id) {
        return bar;
      }
    }
    return null;
  }

}
