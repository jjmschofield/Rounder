import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { RoundsListComponent } from './rounds-list.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([RoundsListComponent]);
  });

  it('should have tests', inject([RoundsListComponent], (underTest) => {
    fail();
  }));

});
