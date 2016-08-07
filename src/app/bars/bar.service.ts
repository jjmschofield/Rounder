import {Injectable} from '@angular/core';
import {Bar} from '../shared/models/bar';
import {BarMock} from '../shared/models/bar.mock'

@Injectable()
export class BarService {
  bars:Bar[] = BarMock;

  getBars() {
    return this.bars;
  }

  getBarById(id:number) {
    for (let bar of this.bars) {
      if (bar.id == id) {
        return bar;
      }
    }
    return null;
  }

}
