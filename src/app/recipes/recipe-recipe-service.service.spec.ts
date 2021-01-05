import { TestBed } from '@angular/core/testing';

import { RecipeRecipeServiceService } from './recipe-recipe-service.service';

describe('RecipeRecipeServiceService', () => {
  let service: RecipeRecipeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeRecipeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
