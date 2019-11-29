import { Component, OnInit, ViewChild } from '@angular/core';
import { LoteAPiService } from 'app/pages/lote/lote-api.service';
import { PesokiloAPService } from 'app/pages/pesokilo/pesokilo-ap.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BovinoService } from '../bovino.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bovino-edit',
  templateUrl: './bovino-edit.component.html',
  styleUrls: ['./bovino-edit.component.scss']
})
export class BovinoEditComponent implements OnInit {
  
  @ViewChild('f', {static: false}) loteForm: NgForm;

  id: string = this.actRoute.snapshot.params['_id']
  pesoData: any = {};
  public loading = false;

  public listlote: any = [];
  public lotetSelect;
  public listpeso: any = [];
  public pesotSelect;

  constructor(
    public loteAPiService: LoteAPiService,
    public actRoute: ActivatedRoute,
    public pesokiloAPService: PesokiloAPService,
    public bovinoService: BovinoService,
    public router: Router
  ) { }

  
  public bovino(bovinoRegistro: NgForm) {
    this.loading = true;
    const formBovino = {
      fechaNacimiento: bovinoRegistro.form.value.fechaNacimiento,
      descripcion: bovinoRegistro.form.value.descripcion,
      sexo: bovinoRegistro.form.value.sexo,
      raza: bovinoRegistro.form.value.raza,
      lote: this.lotetSelect,
      pesokilo: this.pesotSelect
    }
    // Update  data

    if(window.confirm('¿Estás seguro que quieres actualizar?')){
      this.bovinoService.editarBovino(this.id, formBovino).subscribe(dataFinal => {
        Swal.fire({
          type: 'success',
          confirmButtonText: 'Bovino Actualizado'
        }) 
        this.router.navigate(['/bovino/bovinolist'])
      },error => {
        Swal.fire({
          title: 'Algo ha fallado',
          text: 'Verifique los campos  o  Bovino ya Existe',
          type: 'warning',
          confirmButtonText: 'Quiero volverlo a intentar'
          
        }) })
  }
  
  }

     getAllLotes(): void  {
    this.loteAPiService.obtenerLote().subscribe(dataFinal => {
      this.listlote = dataFinal.lote
    //console.log(dataFinal.lote)
    },
      error => {
        console.log(error)
      });
  }

  getAllPesokilos(): void  {
    this.pesokiloAPService.obtenerpesokilo().subscribe(dataFinal => {
      this.listpeso = dataFinal.pesokilo
     //console.log(dataFinal.pesokilo)
    },
      error => {
        console.log(error)
      });
  }


  ngOnInit() {
    this.getAllLotes();
    this.getAllPesokilos();
    this.bovinoService.getBovinoId(this.id).subscribe((dataFinal: {}) => {
      this.pesoData = dataFinal;
      console.log(dataFinal)
    })
  }


}





  



