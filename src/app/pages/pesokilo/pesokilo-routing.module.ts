import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PesokiloCreateComponent } from './pesokilo-create/pesokilo-create.component';
import { PesokiloListComponent } from './pesokilo-list/pesokilo-list.component';
import { PesokiloEditComponent } from './pesokilo-edit/pesokilo-edit.component';



const routes: Routes = [
  {
    path: '',    
    children: [
      
      {
        path: 'pesokilolist',
        component: PesokiloListComponent,
        data: {
          title: 'pesokilo list'
        }
      },
      {
        path: 'pesokilocreate',
        component: PesokiloCreateComponent,
        data: {
          title: 'pesokilo create'
        }
      },
      {
        path: 'pesokiloedit/:_id',
        component: PesokiloEditComponent,
        data: {
          title: 'pesokilo edit'
        }
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesokiloRoutingModule { }
