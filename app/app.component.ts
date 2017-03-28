import { Component } from '@angular/core';
import { Recipe } from './recipe.model';


@Component({
    selector: 'app-root',
    template:
    `<div class="container">
    <recipe-list [selectRecipe]='selectRecipe'></recipe-list>
    <h1>Recipes to eat</h1>
    <ul>
      <li *ngFor="let currentRecipe of masterRecipeList" ><a (click)='setView(currentRecipe)' >{{currentRecipe.title}}</a><span [class]="ratingView(currentRecipe.rating)"></span></li>
    </ul>
  </div>`
})

export class AppComponent {
    masterRecipeList: Recipe[] = [
        new Recipe('Mac and Cheese box', ['boil water', 'add noodles to water and cook til done', 'drain water', 'add powder and stir'], ['box', 'water'],null),
        new Recipe('soft boiled egg', ['add water to a sauce pan', 'bring water to boil', 'add eggs and cook for 8 minutes'], ['eggs', 'water'],null),
        new Recipe('chicken broth', ['boil chicken carcass', 'drink!'], ['chiken carcass', 'water'],null),
    ];

    ratingView(rating) {
      if (rating === 1) {
        return 'glyphicon glyphicon-thumbs-down'
      } else if (rating === 2) {
        return 'glyphicon glyphicon-thumbs-up'
      } else if( rating===3){
        return 'glyphicon glyphicon-thumbs-up'
      }
    }
    selectRecipe: Recipe = this.masterRecipeList[1];

    setView(clickedRecipe) {
        this.selectRecipe = clickedRecipe;
    }
}
