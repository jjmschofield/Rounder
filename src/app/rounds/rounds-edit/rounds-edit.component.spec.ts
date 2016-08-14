import {
  inject,
  addProviders,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { RoundsEditComponent } from './rounds-edit.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([RoundsEditComponent]);
  });

  it('should have tests', inject([RoundsEditComponent], (underTest) => {
    fail();
  }));

});
