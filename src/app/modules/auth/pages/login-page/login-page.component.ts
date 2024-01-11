import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorSession: boolean = false
  formLogin: FormGroup = new FormGroup({});

  constructor(private authService:AuthService, private cookie: CookieService, 
    private router:Router) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    )
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value
    this.authService.sendCredentials(email, password)
      .subscribe(responseOk => { 
        const { token, usuario } = responseOk
        this.cookie.set('token', token, 1/24, '/')
        this.cookie.set('userName', usuario.nombre, 1/24, '/')
        this.router.navigate(['/'])
      },
        err => {
          this.errorSession = true
          console.log('Ocurrio error con el email o pass', err);
        })

  }

}
