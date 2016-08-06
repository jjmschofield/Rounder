import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { NightsOutOverviewComponent } from './nights-out-overview.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([NightsOutOverviewComponent]);
  });

  it('should have tests', inject([NightsOutOverviewComponent], (underTest) => {
    fail();
  }));

});
