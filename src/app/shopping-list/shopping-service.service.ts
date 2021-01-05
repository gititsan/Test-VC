import { EventEmitter } from '@angular/core';
import { Injectable } from '@angular/core';
 
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingServiceService {
  IngrediantChange= new EventEmitter<Ingredient[]>();
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() { }


  onAdd(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.IngrediantChange.emit(this.ingredients);
  }

  getIng ()
  {
    return this.ingredients.slice();
  }
}
