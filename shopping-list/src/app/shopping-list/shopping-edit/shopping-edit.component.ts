import { Ingredient } from './../../shared/ingredient.model';
import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientCreated = new EventEmitter<Ingredient>(); // using output so you can listen from outside component
  @ViewChild('nameInput') ingredientName: ElementRef;
  @ViewChild('amountInput') amount: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    //emit event to pass data to its parent's component
    this.ingredientCreated.emit(
      new Ingredient(this.ingredientName.nativeElement.value, this.amount.nativeElement.value)
    );
  }

  deleteIngredient() {

  }

  clearForm() {
    this.ingredientName.nativeElement.value = "";
    this.amount.nativeElement.value = "";
  }

}
