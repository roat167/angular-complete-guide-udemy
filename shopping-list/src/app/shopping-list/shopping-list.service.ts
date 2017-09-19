import { Subject } from 'rxjs/Subject';

import { Ingredient } from './../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startEditing = new Subject<Number>();

    private ingredients: Ingredient[] = [
        new Ingredient('Tomato', 10),
        new Ingredient('Lemon', 2)
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    getIngredient(id: number) {
        return this.ingredients[id];
    }

    addIngredient(ingredient : Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        // for (let ing of ingredients) {
        //     this.addIngredient(ing);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    updateIngredient(id: number, newIngredient: Ingredient) {
        this.ingredients[id] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteIngredient(id: number) {
        this.ingredients.splice(id, 1); //remove element
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}