import { Ingredient } from './../../shared/ingredient.model';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onAddToShopList() {
    this.recipeService.addIngredientToList(this.recipe.ingredients);
  }
}
