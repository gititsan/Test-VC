import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingServiceService } from './shopping-service.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private p: ShoppingServiceService ) { }

  ngOnInit() {
    //Initialiser la propriété
    this.ingredients=this.p.getIng();
    this.p.IngrediantChange.subscribe(
      (ing:Ingredient[]) => {
        this.ingredients=ing;
      }
    )

  }

  onIngredientAdded(ingredient: Ingredient) {
    this.p.onAdd(ingredient);
  }
}
