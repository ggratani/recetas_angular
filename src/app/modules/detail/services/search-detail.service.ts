import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RecipeModel } from '@core/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class SearchDetailService {
  private readonly URL = environment.api

  constructor(private http: HttpClient) { }

  searchById$(id: string): Observable<any> {
    return this.http.get(`${this.URL}/api/buscar/${id}`)
      .pipe(
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
