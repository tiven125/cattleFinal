import { Component, OnInit } from '@angular/core';
import { GanaderoAPiService } from '../ganadero-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ganadero-list',
  templateUrl: './ganadero-list.component.html',
  styleUrls: ['./ganadero-list.component.scss']
})

export class GanaderoListComponent implements OnInit {
public ganaderoData: any = [];
pageActual: number = 1;

  constructor(
    private ganaderoAPiService: GanaderoAPiService) {
   }
  
  ngOnInit() {
    this.getAllGanaderos();
  }

  // Get Ganadero
     getAllGanaderos(): void  {
    this.ganaderoAPiService.obtenerganadero().subscribe(dataFinal => {
      this.ganaderoData = dataFinal.ganadero
     //console.log(dataFinal.ganadero)
    },
      error => {
        console.log(error)
      });
  }

 // Elminar  Peso por  ID
 deletGanaderoId(ganaderoData): void  {
  if(window.confirm('Estás seguro que quieres eliminar Ganadero?')){
    this.ganaderoAPiService.deletGanaderoID(ganaderoData._id).subscribe(dataFinal => {
      Swal.fire({
        type: 'success',
        confirmButtonText: 'Ganadero Eliminado'
      }) 
      this.getAllGanaderos();
    },
      error => {
        console.log(error)
      });
  }
 }

}





