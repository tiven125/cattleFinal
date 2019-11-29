import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoteAPiService } from '../lote-api.service';
import { GanaderoAPiService } from 'app/pages/ganadero/ganadero-api.service';



@Component({
  selector: 'app-lote-create',
  templateUrl: './lote-create.component.html',
  styleUrls: ['./lote-create.component.scss']
})
export class LoteCreateComponent implements OnInit {
public ganaderoSelect;

  @ViewChild('f', {static: false}) loteForm: NgForm;
 
  constructor(
      private loteAPiService: LoteAPiService,
      private ganaderoAPiService: GanaderoAPiService,
      private router: Router,
      private route: ActivatedRoute) { }



public loading = false;
public ganaderos: any = [];


public lote(loteRegistro: NgForm) {
  this.loading = true;
  const formLote = {
    nombre: loteRegistro.form.value.nombre,
    ubicacion: loteRegistro.form.value.ubicacion,
    dimension: loteRegistro.form.value.dimension,
    ganadero: this.ganaderoSelect

  }
  
  //console.log(formLote)

  
  this.loteAPiService.crearLote(formLote).subscribe(dataFinal => {
    this.loading = true;
     Swal.fire({
      type: 'success',
      confirmButtonText: 'Lote Creado'
    })  
    if (dataFinal.token) {
      this.loading = false;
    }
    
  },error => {
    Swal.fire({
      title: 'Algo ha fallado',
      text: 'Verifique los campos  o  Lote ya Existe',
      type: 'warning',
      confirmButtonText: 'Quiero volverlo a intentar'
      
    })  });
}


ngOnInit() {
  this.getAllGanaderos();
}

getAllGanaderos(): void  {
  this.ganaderoAPiService.obtenerganadero().subscribe(dataFinal => {
    this.ganaderos = dataFinal.ganadero
   //console.log(dataFinal.ganadero)
  },
    error => {
      console.log(error)
    });

}


onSubmit() {
  this.loteForm.reset();
}



}