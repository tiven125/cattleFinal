import { Component, OnInit, ViewChild } from '@angular/core';
import { GanaderoAPiService } from '../ganadero-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ganadero-create',
  templateUrl: './ganadero-create.component.html',
  styleUrls: ['./ganadero-create.component.scss']
})
export class GanaderoCreateComponent implements OnInit {
  
  @ViewChild('f', {static: false}) ganaderoForm: NgForm;

  constructor(
      private ganaderoAPiService: GanaderoAPiService,
      private router: Router,
      private route: ActivatedRoute) { }

public loading = false;

public ganadero(ganaderoRegistro: NgForm) {
  this.loading = true;
  const formGanadero = {
    nombre: ganaderoRegistro.form.value.nombre,
    correo: ganaderoRegistro.form.value.correo,
    telefono: ganaderoRegistro.form.value.telefono
  }
  
 // console.log(formGanadero)
  this.ganaderoAPiService.crearGanadero(formGanadero).subscribe(dataFinal => {
    this.loading = true;
     Swal.fire({
      type: 'success',
      confirmButtonText: 'Ganadero Creado'
    })  
    if (dataFinal.token) {
      this.loading = false;
    }
    
  },error => {
    Swal.fire({
      title: 'Algo ha fallado',
      text: 'Verifique los campos  o  Ganadero ya Existe',
      type: 'warning',
      confirmButtonText: 'Quiero volverlo a intentar'
      
    })  });
}

onSubmit() {
  this.ganaderoForm.reset();
}


ngOnInit() {}
}
