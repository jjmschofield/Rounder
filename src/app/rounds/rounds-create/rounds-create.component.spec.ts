import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { RoundsCreate } from './rounds-create.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([RoundsCreate]);
  });

  it('should have tests', inject([RoundsCreate], (underTest) => {
    fail();
  }));

});
