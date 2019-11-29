import { Component, OnInit } from '@angular/core';
import { LoteAPiService } from 'app/pages/lote/lote-api.service';
import { BovinoService } from '../bovino.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-bovino-list',
  templateUrl: './bovino-list.component.html',
  styleUrls: ['./bovino-list.component.scss']
})
export class BovinoListComponent implements OnInit {

  public bovinoData: any = [];

  constructor(private bovinoService: BovinoService) {
   }
  

  ngOnInit() {
    this.getAllBovinos();
  }
     getAllBovinos(): void  {
    this.bovinoService.obtenerBovino().subscribe(dataFinal => {
      this.bovinoData = dataFinal.bovino
     //console.log(dataFinal.bovino)
    },
      error => {
        console.log(error)
      });
  }

// Elminar  Peso por  ID
deletBovinoId(bovinoData): void  {
  if(window.confirm('Estás seguro que quieres eliminar Bovino?')){
    this.bovinoService.deletBovino(bovinoData._id).subscribe(dataFinal => {
      Swal.fire({
        type: 'success',
        confirmButtonText: 'Bovino Eliminado'
      }) 
      this.getAllBovinos();
    },
      error => {
        console.log(error)
      });
  }
 }




}

