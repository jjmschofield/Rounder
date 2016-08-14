import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { RoundsCardListComponent } from './rounds-card-list.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([RoundsCardListComponent]);
  });

  it('should have tests', inject([RoundsCardListComponent], (underTest) => {
    fail();
  }));

});
