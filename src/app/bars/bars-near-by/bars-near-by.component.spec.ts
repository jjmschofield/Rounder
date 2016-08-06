import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { BarsNearByComponent } from './bars-near-by.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([BarsNearByComponent]);
  });

  it('should have tests', inject([BarsNearByComponent], (underTest) => {
    fail();
  }));

});
