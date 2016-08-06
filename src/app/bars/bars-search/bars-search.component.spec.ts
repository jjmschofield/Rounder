import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { BarsSearchComponent } from './bars-search.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([BarsSearchComponent]);
  });

  it('should have tests', inject([BarsSearchComponent], (underTest) => {
    fail();
  }));

});