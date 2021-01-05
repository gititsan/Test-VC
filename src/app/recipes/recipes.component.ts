import { Component, OnInit } from '@angular/core';
import { RecipeRecipeServiceService } from './recipe-recipe-service.service';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeRecipeServiceService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipee: RecipeRecipeServiceService) { }

  ngOnInit() {
    this.recipee.recipeSend.subscribe(
      (recipe:Recipe) => {
        this.selectedRecipe=recipe;
      }
    )
  }

}
