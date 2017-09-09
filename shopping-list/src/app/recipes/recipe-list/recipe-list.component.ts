import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   //<!-- define array of Recipe object
  recipes: Recipe[];

  constructor(private recipeService: RecipeService,
            private router: Router,
            private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  } 

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
