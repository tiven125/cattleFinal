import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { PesokiloAPService } from '../pesokilo-ap.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pesokilo-edit',
  templateUrl: './pesokilo-edit.component.html',
  styleUrls: ['./pesokilo-edit.component.scss']
})
export class PesokiloEditComponent implements OnInit {
   id: string = this.actRoute.snapshot.params['_id']
  pesoData: any = {};

  constructor(
    public pesokiloAPService: PesokiloAPService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  // Update  data
  updatePeso() {
    if(window.confirm('¿Estás seguro que quieres actualizar?')){
      this.pesokiloAPService.editarPeso(this.id, this.pesoData).subscribe(dataFinal => {
        Swal.fire({
          type: 'success',
          confirmButtonText: 'peso Actualizado'
        }) 
        this.router.navigate(['/peso/pesokilolist'])
      })
    }
  }

  ngOnInit() { 
    
    this.pesokiloAPService.getPesoId(this.id).subscribe((dataFinal: {}) => {
      this.pesoData = dataFinal;
      console.log(dataFinal)
    })
    
  }

}





