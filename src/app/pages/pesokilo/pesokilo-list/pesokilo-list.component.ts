import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PesokiloAPService } from '../pesokilo-ap.service';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-pesokilo-list',
  templateUrl: './pesokilo-list.component.html',
  styleUrls: ['./pesokilo-list.component.scss']
})
export class PesokiloListComponent implements OnInit {

  public pesoData: any = [];
  pageActual: number = 1;


  filterPost = this.pesoData;

  constructor(private pesokiloAPService: PesokiloAPService, 
    private router: Router,
   private route: ActivatedRoute) { }


   // GET Peso  
         getAllPesokilos(): void  {
        this.pesokiloAPService.obtenerpesokilo().subscribe(dataFinal => {
          this.pesoData = dataFinal.pesokilo
        // console.log(dataFinal.pesokilo)
        },
          error => {
            console.log(error)
          });
      }
    
      // Elminar  Peso por  ID
     deletPesoId(pesoData): void  {
      if(window.confirm('Estás seguro que quieres eliminar peso?')){
        this.pesokiloAPService.deletPesokilo(pesoData._id).subscribe(dataFinal => {
          Swal.fire({
            type: 'success',
            confirmButtonText: 'Peso Eliminado'
          }) 
          this.getAllPesokilos();
        },
          error => {
            console.log(error)
          });
      }
     }

     // On submit button click
  onSubmit() {
  }

      ngOnInit() {
        this.getAllPesokilos();
      }
     }
     