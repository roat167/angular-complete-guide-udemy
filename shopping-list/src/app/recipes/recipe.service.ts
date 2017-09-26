import { Subject } from 'rxjs/Subject';
import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {    
    recipesChange = new Subject<Recipe[]>();
    //https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwi_ncykqrLWAhVI32MKHeC0Cs4QjRwIBw&url=https%3A%2F%2Fwww.dreamstime.com%2Fstock-images-spaghetti-bolognese-sauce-closeup-coiled-cooked-italian-topped-garnished-fresh-basil-leaves-image31644474&psig=AFQjCNF3k4sCtdpubI21ABOgq5e3r5vgDQ&ust=1505947637218285
    private recipes: Recipe[] = [
        new Recipe('Tuna Salad', 'Test Recipe', 'https://www.chelseasmessyapron.com/wp-content/uploads/2015/02/Easy-Tuna-Avocado-Lettuce-Wraps.jpg', 
            [new Ingredient('Lettuc', 1),
            new Ingredient('Bread', 2)]),
        new Recipe('A Test Recipe 2', 'Test Recipe TWO', 'https://media1.popsugar-assets.com/files/thumbor/DmqTd4-sYb-C3D_v9l5wW8ER4jU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/08/05/097/n/1922729/b196f4b6d3d09caa_veggie-sandwich-2.jpg', 
        [new Ingredient('Tomato', 10),
        new Ingredient('Sauce', 1)])        
      ];
    
    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice(); // get a copy of recipes, avoid outside reference to recipes
    }

    addIngredientToList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index: number) {
        //return this.recipes.slice()[index];
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChange.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        this.recipes[index] = recipe;
        this.recipesChange.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChange.next(this.recipes.slice());
    }
}