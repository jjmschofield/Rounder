import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { ProductListComponent } from './product-list.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([ProductListComponent]);
  });

  it('should have tests', inject([ProductListComponent], (underTest) => {
    fail();
  }));

});
