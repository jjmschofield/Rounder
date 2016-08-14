import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { RoundsCardComponent } from './rounds-card.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([RoundsCardComponent]);
  });

  it('should have tests', inject([RoundsCardComponent], (underTest) => {
    fail();
  }));

});
