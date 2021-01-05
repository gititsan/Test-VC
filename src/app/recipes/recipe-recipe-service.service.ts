import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
 
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeRecipeServiceService {

  recipeSend= new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  
  

  constructor( ) { 

  
  }

  getRecipes(){
    return this.recipes.slice();
  }
}
