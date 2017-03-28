import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule }      from '@angular/forms';
import { RecipeViewComponent }   from './recipe-list.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, RecipeViewComponent ],
  bootstrap:    [ AppComponent, RecipeViewComponent ]
})

export class AppModule { }
