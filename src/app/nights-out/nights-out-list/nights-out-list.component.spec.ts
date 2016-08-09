import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { NightsOutListComponent } from './nights-out-list.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([NightsOutListComponent]);
  });

  it('should have tests', inject([NightsOutListComponent], (underTest) => {
    fail();
  }));

});
