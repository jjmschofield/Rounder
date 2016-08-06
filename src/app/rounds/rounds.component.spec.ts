import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { RoundsComponent } from './rounds.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([RoundsComponent]);
  });

  it('should have tests', inject([RoundsComponent], (underTest) => {
    fail();
  }));

});
