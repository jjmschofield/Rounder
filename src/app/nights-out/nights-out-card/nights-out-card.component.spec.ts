import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { NightsOutCardComponent } from './nights-out-card.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([NightsOutCardComponent]);
  });

  it('should have tests', inject([NightsOutCardComponent], (underTest) => {
    fail();
  }));

});
