import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { RoundsDetailComponent } from './rounds-detail.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([RoundsDetailComponent]);
  });

  it('should have tests', inject([RoundsDetailComponent], (underTest) => {
    fail();
  }));

});
