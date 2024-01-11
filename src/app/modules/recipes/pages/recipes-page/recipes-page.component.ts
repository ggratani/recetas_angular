import { Component } from '@angular/core';
import { Subscription } from 'rxjs'
import { RecipeModel } from '@core/models/recipe.model';
import { RecipeService } from '@modules/recipes/services/recipe.service';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent {
  recipesTrending: Array<RecipeModel> = []
  listObservers$: Array<Subscription> = []

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.loadDataAll()
  }

  async loadDataAll(): Promise<void> {
    const recipes = await this.recipeService.getAllRecipes$().toPromise();
    
    if (recipes !== undefined) {
      this.recipesTrending = recipes;
    } else {
      console.error('No se pudieron cargar las recetas');
      this.recipesTrending = [];
    }

    console.log(this.recipesTrending)
  }

  ngOnDestroy(): void {
  }
}
