import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { BarsComponent } from './bars.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([BarsComponent]);
  });

  it('should have tests', inject([BarsComponent], (underTest) => {
    fail();
  }));

});
