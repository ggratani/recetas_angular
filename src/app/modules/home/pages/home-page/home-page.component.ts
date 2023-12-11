import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private cookie: CookieService, private router: Router) {}
  logout(): void {
    
    this.cookie.deleteAll();
    this.router.navigate(['auth/login']); 

  }
}
