import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { NightsOutComponent } from './nights-out.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([NightsOutComponent]);
  });

  it('should have tests', inject([NightsOutComponent], (underTest) => {
    fail();
  }));

});
