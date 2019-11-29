import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'app/shared/auth/auth.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-register-page',
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  @ViewChild('f', {static: false}) registroForm: NgForm;

  constructor(
      private authService: AuthService,
      private router: Router,
      private route: ActivatedRoute) { }

public loading = false;

public registro(usuarioRegistro: NgForm) {
  this.loading = true;
  const formRegistro = {
    displayName: usuarioRegistro.form.value.displayName,
    email: usuarioRegistro.form.value.email,
    password: usuarioRegistro.form.value.password
  }
  
  console.log(formRegistro)

  this.authService.crearUsuario(formRegistro.displayName,formRegistro.email,formRegistro.password).subscribe(dataFinal => {
    this.loading = true;
    if (dataFinal.token) {
     this.router.navigate(['/user/login'])
     Swal.fire({
      type: 'success',
      confirmButtonText: 'Usuario Creado'
    })  
      this.loading = false;
    }
    
  },error => {
    Swal.fire({
      title: 'Algo ha fallado',
      text: '',
      type: 'warning',
      confirmButtonText: 'Quiero volverlo a intentar'
      
    })  });
}


 // On submit button click
  onSubmit() {
      this.registroForm.reset();
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
