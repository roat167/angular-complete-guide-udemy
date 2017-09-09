import { RecipeService } from './../../recipe.service';
import { Recipe } from './../../recipe.model';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
  @Input() recipe: Recipe; 
  @Input() index: number;

  ngOnInit() {
  }
}
