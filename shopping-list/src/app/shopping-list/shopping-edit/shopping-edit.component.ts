import { Subscription } from 'rxjs/Subscription';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from './../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  //@Output() ingredientCreated = new EventEmitter<Ingredient>(); // using output so you can listen from outside component  
  @ViewChild('f') slForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editItemId: number;
  editItem: Ingredient;

  
  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
    this.subscription =  this.slService.startEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editItemId = index;
        this.editItem = this.slService.getIngredient(index);
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      }
    );
  }

  onSaveItem(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.slService.updateIngredient(this.editItemId, newIngredient);
    } else {
      this.slService.addIngredient(newIngredient);
    }
    this.editMode = false;
    form.reset();
  }

  onDeleteItem() {
    this.slService.deleteIngredient(this.editItemId);
    this.onClear();

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onClear() {
    this.slForm.reset();
    this.editMode = false;
    // this.ingredientName.nativeElement.value = "";
    // this.amount.nativeElement.value = "";
  }

}
