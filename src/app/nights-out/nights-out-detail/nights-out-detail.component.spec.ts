import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { NightsOutDetailComponent } from './nights-out-detail.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([NightsOutDetailComponent]);
  });

  it('should have tests', inject([NightsOutDetailComponent], (underTest) => {
    fail();
  }));

});
