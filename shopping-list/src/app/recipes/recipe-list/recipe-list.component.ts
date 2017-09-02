import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
   //<!-- define array of Recipe object
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test Recipe', 'https://media1.popsugar-assets.com/files/thumbor/DmqTd4-sYb-C3D_v9l5wW8ER4jU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/08/05/097/n/1922729/b196f4b6d3d09caa_veggie-sandwich-2.jpg'),
    new Recipe('A Test Recipe 2', 'Test Recipe TWO', 'https://media1.popsugar-assets.com/files/thumbor/DmqTd4-sYb-C3D_v9l5wW8ER4jU/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2014/08/05/097/n/1922729/b196f4b6d3d09caa_veggie-sandwich-2.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
