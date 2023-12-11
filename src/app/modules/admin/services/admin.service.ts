import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecipeModel } from '@core/models/recipe.model';
import { CookieService } from 'ngx-cookie-service';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { }

  editRecipe$(name:string, description:string, ingredients:string, imagePath:string, _id:string): Observable<any> {
    const token = this.cookieService.get('token')
    const body = {
      name,
      description,
      ingredients,
      imagePath
    }

    return this.httpClient.put(`${this.URL}/recipes/edit/${_id}?auth=${token}`, body)
    .pipe(
      map(({ data }: any) => {
        console.log(data)
        return data
      })
    )
  }

  addRecipe$(name:string, description:string, ingredients:string, imagePath:string): Observable<any> {
    const token = this.cookieService.get('token')
    const body = {
      name,
      description,
      ingredients,
      imagePath
    }
    return this.httpClient.post(`${this.URL}/recipes/add?auth=${token}`, body)
    .pipe(
      map(({ data }: any) => {
        console.log(data)
        return data
      })
    )
  }

  deleteRecipe$(id: any): Observable<any> {
    const token = this.cookieService.get('token')
    return this.httpClient.delete(`${this.URL}/recipes/delete/${id}?auth=${token}`)
    .pipe(
      // Mapear la respuesta y extraer los datos
      map(({ data }: any) => {
        console.log(data);
        return data;
      }),
      // Manejar errores en caso de que ocurran
      catchError((error) => {
        console.error('Error al eliminar la receta:', error);
        return error; 
      })
    );
  }
}
