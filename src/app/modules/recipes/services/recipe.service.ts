import { HttpClient, HttpParams, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { RecipeModel } from '@core/models/recipe.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient, private cookieService: CookieService) { 
    
  }

  getAllRecipes$(): Observable<any> {
    const token = this.cookieService.get('token')
    return this.httpClient.get(`${this.URL}/recipes?auth=${token}`)
    .pipe(
      map(( data : any) => {
        return data
      })
    )
  }
}
