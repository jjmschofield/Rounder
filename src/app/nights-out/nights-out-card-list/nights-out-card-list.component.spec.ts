import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { NightsOutCardListComponent } from './nights-out-card-list.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([NightsOutCardListComponent]);
  });

  it('should have tests', inject([NightsOutCardListComponent], (underTest) => {
    fail();
  }));

});
