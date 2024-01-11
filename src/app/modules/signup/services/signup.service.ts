import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  private readonly URL = environment.api
  constructor(private http: HttpClient) { }

  public sendCredentials(email:string, password:string, nombre:string): Observable<any> {

    const body = {
      email,
      password,
      nombre,
      "rol": "ADMIN_ROLE"
    }
    console.log("Send credentials")
    console.log(this.URL)
    return this.http.post(`${this.URL}/api/signup`, body)
  }
}
