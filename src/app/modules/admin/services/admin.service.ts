import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) { }

  editRecipe$(name:string, description:string, ingredients:string, imagePath:string, _id:string): Observable<any> {
    const body = {
      "nombre": name,
      "descripcion": description,
      "ingredientes": ingredients,
      "img": imagePath
    }

    return this.httpClient.put(`${this.URL}/api/recetas/editar/${_id}`, body)
    .pipe(
      catchError((error: any) => {
        console.error('Error al editar la receta:', error);
        return throwError(error); 
      }),
      map(({ data }: any) => {
        console.log(data);
        return data;
      })
    );
  }

  addRecipe$(name:string, description:string, ingredients:string, imagePath:string): Observable<any> {
    const body = {
      "nombre": name,
      "descripcion": description,
      "ingredientes": ingredients,
      "img": imagePath
    }
    console.log(body)
    return this.httpClient.post(`${this.URL}/api/recetas`, body)
    .pipe(
      catchError((error: any) => {
        console.error('Error al agregar la receta:', error);
        return throwError(error); 
      }),
      map(({ data }: any) => {
        console.log(data);
        return data;
      })
    );
  }

  deleteRecipe$(id: any): Observable<any> {
    return this.httpClient.delete(`${this.URL}/api/recetas/delete/${id}`)
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
