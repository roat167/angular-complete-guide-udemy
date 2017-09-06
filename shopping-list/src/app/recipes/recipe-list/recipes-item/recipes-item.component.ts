import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeSelected = new EventEmitter<void>(); 

  constructor() { }

  ngOnInit() {
  }

  onSelectedRecipe() {
    this.recipeSelected.emit();
  }

}
