import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { RecipeModel } from '@core/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) { }

  searchRecipes$(term: string): Observable<RecipeModel[]> {
    return this.http.get(`${this.URL}/api/buscar/${term}`)
      .pipe(
        tap((response: any) => {
          console.log('Respuesta HTTP:', response); // Loguea la respuesta HTTP antes de cualquier transformación
        }),
        map((data: any) => {
          const { results } = data
          const recipes: RecipeModel[] = results.map((recipeData: any) => {
            return {
              name: recipeData.nombre, 
              description: recipeData.descripcion, 
              ingredients: recipeData.ingredientes,
              _id: recipeData._id,
              imagePath: recipeData.img,
              price: recipeData.precio
            };
          });
  
          return recipes
        })
      );
  }
  
}