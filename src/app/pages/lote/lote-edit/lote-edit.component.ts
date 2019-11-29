import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { LoteAPiService } from '../lote-api.service';
import { NgForm } from '@angular/forms';
import { GanaderoAPiService } from 'app/pages/ganadero/ganadero-api.service';

@Component({
  selector: 'app-lote-edit',
  templateUrl: './lote-edit.component.html',
  styleUrls: ['./lote-edit.component.scss']
})
export class LoteEditComponent implements OnInit {

  id: string = this.actRoute.snapshot.params['_id']
  pesoData: any = {};
  public ganaderoSelect;
  public loading = false;
  public ganaderos: any = [];

  @ViewChild('f', {static: false}) loteForm: NgForm;
 
  constructor(
    public loteAPiService: LoteAPiService,
    public actRoute: ActivatedRoute,
    public ganaderoAPiService: GanaderoAPiService,
    public router: Router
  ) { }

  public lote(loteRegistro: NgForm) {
    this.loading = true;
    const formLote = {
      nombre: loteRegistro.form.value.nombre,
      ubicacion: loteRegistro.form.value.ubicacion,
      dimension: loteRegistro.form.value.dimension,
      ganadero: this.ganaderoSelect
  
    }
    // Update  data
    if(window.confirm('¿Estás seguro que quieres actualizar?')){
      this.loteAPiService.editarPeso(this.id, formLote).subscribe(dataFinal => {
        Swal.fire({
          type: 'success',
          confirmButtonText: 'Lote Actualizado'
        }) 
        this.router.navigate(['/lote/lotelist'])
      },error => {
        Swal.fire({
          title: 'Algo ha fallado',
          text: 'Verifique los campos  o  Lote ya Existe',
          type: 'warning',
          confirmButtonText: 'Quiero volverlo a intentar'
          
        }) })
  }
  
  }

  
getAllGanaderos(): void  {
  this.ganaderoAPiService.obtenerganadero().subscribe(dataFinal => {
    this.ganaderos = dataFinal.ganadero
   console.log(dataFinal.ganadero)
  },
    error => {
      console.log(error)
    });

}

  ngOnInit() { 
    this.loteAPiService.getLoteId(this.id).subscribe((dataFinal: {}) => {
      this.pesoData = dataFinal;
      console.log(dataFinal)
    })
  this.getAllGanaderos();
  }

}





