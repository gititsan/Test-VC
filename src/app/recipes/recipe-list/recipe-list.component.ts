import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { RecipeRecipeServiceService } from '../recipe-recipe-service.service';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   
  recipes:Recipe[];
  
  constructor(private r:RecipeRecipeServiceService){
  
   }

   //On inrialise dans ngInit
  ngOnInit() {
    this.recipes=this.r.getRecipes();
  }

  

}
