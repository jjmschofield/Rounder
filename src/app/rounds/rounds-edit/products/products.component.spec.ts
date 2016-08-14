import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { ProductsComponent } from './products.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([ProductsComponent]);
  });

  it('should have tests', inject([ProductsComponent], (underTest) => {
    fail();
  }));

});
