import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { RecipeModel } from '@core/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly URL = environment.api

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  searchRecipes$(term: string): Observable<RecipeModel[]> {
    const token = this.cookieService.get('token');
    return this.http.get<RecipeModel[]>(`${this.URL}/recipes?auth=${token}`)
      .pipe(
        map((dataRaw: RecipeModel[]) => {
          return dataRaw.filter(receta => receta.name.toLowerCase().includes(term.toLowerCase()));
        })
      );
  }
  
}