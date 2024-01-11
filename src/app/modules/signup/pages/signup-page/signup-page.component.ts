import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { SignupService } from '@modules/signup/services/signup.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {
  errorSession: boolean = false
  formSignup: FormGroup = new FormGroup({});

  constructor(private signUpService: SignupService, private cookie: CookieService, 
    private router:Router) {}

  ngOnInit(): void {
    this.formSignup = new FormGroup(
      {
        email: new FormControl('', [
          Validators.required,
          Validators.email,
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ]),
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(12)
        ])
      }
    )
  }

  sendSignup(): void {
    const { email, password, name } = this.formSignup.value
    this.signUpService.sendCredentials(email, password, name)
      .subscribe(responseOk => { 
        const { token, usuario } = responseOk
        this.cookie.set('token', token, 1/24, '/')
        this.cookie.set('userName', usuario.nombre, 1/24, '/')
        this.router.navigate(['/'])
      },
        err => {
          this.errorSession = true
          console.log('Ocurrio error', err);
        })

  }

}
