import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { RecipeModel } from '@core/models/recipe.model';


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) { 
    
  }

  getAllRecipes$():Observable<RecipeModel[]> {
    return this.httpClient.get(`${this.URL}/api/recetas`)
      .pipe(
        map((data: any) => {
          const { recetas } = data
          const recipes: RecipeModel[] = recetas.map((recipeData: any) => {
            return {
              name: recipeData.nombre, 
              description: recipeData.descripcion, 
              ingredients: recipeData.ingrediente,
              _id: recipeData._id,
              imagePath: recipeData.img,
              price: recipeData.precio
            };
          });
          return recipes;
        })
      );
  }
}
