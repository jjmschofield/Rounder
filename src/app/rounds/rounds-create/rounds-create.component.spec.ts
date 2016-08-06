import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { RoundsCreateComponent } from './rounds-create.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([RoundsCreateComponent]);
  });

  it('should have tests', inject([RoundsCreateComponent], (underTest) => {
    fail();
  }));

});
