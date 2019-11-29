import { Component, OnInit } from '@angular/core';
import { LoteAPiService } from '../lote-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lote-list',
  templateUrl: './lote-list.component.html',
  styleUrls: ['./lote-list.component.scss']
})
export class LoteListComponent implements OnInit {

  loadingIndicator: boolean = true;
public loteData: any = [];
pageActual: number = 1;

  constructor(private loteAPiService: LoteAPiService) {
   }
  

  ngOnInit() {
    this.getAllLotes();
  }
     getAllLotes(): void  {
    this.loteAPiService.obtenerLote().subscribe(dataFinal => {
      this.loteData = dataFinal.lote
    // console.log(dataFinal.lote)
    },
      error => {
        console.log(error)
      });
  }

 // Elminar  Peso por  ID
 deletLoteId(loteData): void  {
  if(window.confirm('Estás seguro que quieres eliminar Lote?')){
    this.loteAPiService.deleLote(loteData._id).subscribe(dataFinal => {
      Swal.fire({
        type: 'success',
        confirmButtonText: 'Lote Eliminado'
      }) 
      this.getAllLotes();
    },
      error => {
        console.log(error)
      });
  }
 }

}


