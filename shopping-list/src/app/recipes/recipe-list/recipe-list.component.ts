import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
   //<!-- define array of Recipe object
  recipes: Recipe[];
  subscription: Subscription;

  constructor(private recipeService: RecipeService,
            private router: Router,
            private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipeService.recipesChange
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
  );
    this.recipes = this.recipeService.getRecipes();
  } 

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
