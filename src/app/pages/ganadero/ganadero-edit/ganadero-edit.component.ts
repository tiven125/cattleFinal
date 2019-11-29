import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GanaderoAPiService } from '../ganadero-api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ganadero-edit',
  templateUrl: './ganadero-edit.component.html',
  styleUrls: ['./ganadero-edit.component.scss']
})
export class GanaderoEditComponent implements OnInit {

  id: string = this.actRoute.snapshot.params['_id']
  ganaderoData: any = {};

  constructor(
    public ganaderoAPiService: GanaderoAPiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  // Update  data
  updateGanadero() {
    if(window.confirm('¿Estás seguro que quieres actualizar?')){
      this.ganaderoAPiService.editarGanadero(this.id, this.ganaderoData).subscribe(dataFinal => {
        Swal.fire({
          type: 'success',
          confirmButtonText: 'Ganadero Actualizado'
        }) 
        this.router.navigate(['/ganadero/ganaderolist'])
      },error => {
        Swal.fire({
          title: 'Algo ha fallado',
          text: 'Verifique los campos  o  Ganadero ya Existe',
          type: 'warning',
          confirmButtonText: 'Quiero volverlo a intentar'
          
        }) })
    }
  }

  ngOnInit() { 
    
    this.ganaderoAPiService.getGanaderoId(this.id).subscribe((dataFinal: {}) => {
      this.ganaderoData = dataFinal;
      console.log(dataFinal)
    })
    
  }

}

