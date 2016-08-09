import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { NavBarComponent } from './nav-bar.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([NavBarComponent]);
  });

  it('should have tests', inject([NavBarComponent], (underTest) => {
    fail();
  }));

});
