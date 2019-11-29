import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { PesokiloAPService } from '../pesokilo-ap.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pesokilo-create',
  templateUrl: './pesokilo-create.component.html',
  styleUrls: ['./pesokilo-create.component.scss']
})
export class PesokiloCreateComponent implements OnInit {

@ViewChild('f', {static: false}) pesokiloForm: NgForm;


constructor(private pesokiloAPService: PesokiloAPService, 
  private router: Router,
   private route: ActivatedRoute) { }

public loading = false;
public pesokilo(kilogramosPesokilo: NgForm) {
  this.loading = true;
  const formPesokilo = {
    kilogramos: kilogramosPesokilo.form.value.kilogramos,
  };

  this.pesokiloAPService.crearPesokilo(formPesokilo.kilogramos).subscribe(dataFinal => {
    this.loading = true;
    Swal.fire({
      type: 'success',
      confirmButtonText: 'Peso Creado'
    }) 
    if (dataFinal.token) {
      this.loading = false;
    }
  },error => {
    Swal.fire({
      title: 'Algo ha fallado',
      text: 'campo  incorrecto Debe  Ingresar un Numero',
      type: 'warning',
      confirmButtonText: 'Quiero volverlo a intentar'
      
    })  });
}

onSubmit() {
  this.pesokiloForm.reset();
}

  ngOnInit() {
    
    }
  }





