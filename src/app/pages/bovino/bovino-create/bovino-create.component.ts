import { Component, OnInit, ViewChild } from '@angular/core';
import { LoteAPiService } from 'app/pages/lote/lote-api.service';
import { PesokiloAPService } from 'app/pages/pesokilo/pesokilo-ap.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { BovinoService } from '../bovino.service';

@Component({
  selector: 'app-bovino-create',
  templateUrl: './bovino-create.component.html',
  styleUrls: ['./bovino-create.component.scss']
})
export class BovinoCreateComponent implements OnInit {

  @ViewChild('f', {static: false}) loteForm: NgForm;

  public listlote: any = [];
  public lotetSelect;
  public listpeso: any = [];
  public pesotSelect;
  public loading = false;

  constructor(
    private loteAPiService: LoteAPiService,
    private pesokiloAPService: PesokiloAPService,
    private bovinoService: BovinoService,
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
   // console.log(formBovino)
    
    this.bovinoService.crearBovino(formBovino).subscribe(dataFinal => {
      this.loading = true;
       Swal.fire({
        type: 'success',
        confirmButtonText: 'Bovino Creado'
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
    this.getAllLotes();
    this.getAllPesokilos();
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
    // console.log(dataFinal.pesokilo)
    },
      error => {
        console.log(error)
      });
  }
}

