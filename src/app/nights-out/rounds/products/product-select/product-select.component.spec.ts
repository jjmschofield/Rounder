import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { ProductSelectComponent } from './product-select.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([ProductSelectComponent]);
  });

  it('should have tests', inject([ProductSelectComponent], (underTest) => {
    fail();
  }));

});
