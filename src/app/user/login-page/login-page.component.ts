import { Location } from '@angular/common';
import { isError } from 'util';
import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from 'app/shared/auth/auth.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  @ViewChild('f', {static: false}) loginForm: NgForm;

  constructor(
      private authService: AuthService,
      private router: Router,
      private route: ActivatedRoute) { }

public loading = false;

public login(userLogin: NgForm) {
  this.loading = true;
  const formLogin = {
    userName: userLogin.form.value.Username,
    password: userLogin.form.value.password
  }
  this.authService.validar(formLogin.userName,formLogin.password).subscribe(dataFinal => {
    this.loading = true;
    if (dataFinal.token) {
      const tokenCifrado = this.authService.cifrarToken(dataFinal.token)
      sessionStorage.setItem(tokenCifrado.nameToken, tokenCifrado.cifrado)
      this.router.navigate(['/home'])
      
      this.loading = false;
    }
    
  },
    error => {
      if (error.Errors.message.includes('username') || error.Errors.message.includes('invalid_database')) {
        this.loading = true;
        Swal.fire({
          title: 'Algo ha fallado',
          text: 'Tu usuario/contraseña es incorrecto',
          type: 'warning',
          confirmButtonText: 'Quiero volverlo a intentar'
          
        })
        
      } else {
        Swal.fire({
          title: 'Hemos tenido un error!',
          text: error.Errors.message,
          type: 'error',
          confirmButtonText: 'Aceptar'
        })
        
      }
      this.loading = false;
    });
  this.loading = false;
}


 // On submit button click
  onSubmit() {
      this.loginForm.reset();
  }
  // On Forgot password link click
  onForgotPassword() {
      this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
  }
  // On registration link click
  onRegister() {
      this.router.navigate(['register'], { relativeTo: this.route.parent });
  }

ngOnInit() {}
}
