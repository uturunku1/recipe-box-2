import { Component, Input } from '@angular/core';
import { Recipe } from './recipe.model';
@Component({
    selector: 'recipe-list',
    template:
    `
    <h1>liehrfds</h1>
    <div class="recipe-view" *ngIf="selectRecipe">
    {{selectRecipe.title}}

    <ul>
    <li *ngFor='let ingredient of selectRecipe.ingredients'>{{ingredient}}</li>
    </ul>

    {{selectRecipe.directions}}
    <form>
      <label>Enter a recipe rating (1-3):</label>
      <input [(ngModel)]="selectRecipe.rating" name="rating" type="number" min=1 max=3 required>
    </form>
    {{selectRecipe.rating}}
    </div>
  `

})


export class RecipeViewComponent {
    @Input() selectRecipe: Recipe;
}
