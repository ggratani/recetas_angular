import { Component, ElementRef, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  mainMenu: { 
    defaultOptions: Array<any>, accessLink: Array<any> 
  } = { defaultOptions: [], accessLink:[] }

  customOptions: Array<any> = []

  constructor(private cookieService: CookieService, private router: Router) {}

  isAdmin(): any {
    const userRole = this.cookieService.get('role'); 
    return userRole
  }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/']
      },
      {
        name: 'Buscar',
        icon: 'uil uil-search',
        router: ['/', 'history2']
      },
      {
        name: 'Favoritos',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
      },
      {
        name: 'Administrar',
        icon: 'uil uil-chart',
        router: ['/', 'admin'],
      }
    ]
    console.log(this.isAdmin())
    if (this.isAdmin() === "admin") {
      this.mainMenu.defaultOptions.push({
        name: 'Configuración',
        icon: 'uil uil-cog',
        router: ['/', 'admin'],
        role: 'admin'
      });
    }

  }

  logout(): void {
    this.cookieService.deleteAll();
    
    this.router.navigate(['auth/login']); 

    this.mainMenu.defaultOptions = [];
  }
}


