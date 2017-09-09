import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from './../../shared/ingredient.model';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;


  constructor(private recipeService: RecipeService,
      private route: ActivatedRoute,
      private router: Router) { }

  ngOnInit() {
    this.route.params
      .subscribe (
        (params: Params) => {
          this.id = +params['id']; //using plus sign to cast to number
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );
    const id = this.route.snapshot.params['id'];
    //this.recipe = rou
  }

  onAddToShopList() {
    this.recipeService.addIngredientToList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }
}
