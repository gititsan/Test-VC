import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { RecipeRecipeServiceService } from '../../recipe-recipe-service.service';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor(private r:RecipeRecipeServiceService){
  
  }


  ngOnInit() {
  }

  onSelected() {
    this.r.recipeSend.emit(this.recipe);
  }

}
