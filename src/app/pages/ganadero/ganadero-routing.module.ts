import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GanaderoCreateComponent } from './ganadero-create/ganadero-create.component';
import { GanaderoListComponent } from './ganadero-list/ganadero-list.component';
import { GanaderoEditComponent } from './ganadero-edit/ganadero-edit.component';




const routes: Routes = [
  {
    path: '',    
    children: [
      
      {
        path: 'ganaderocreate',
        component: GanaderoCreateComponent,
        data: {
          title: 'ganadero create'
        }
      },

      {
        path: 'ganaderolist',
        component: GanaderoListComponent,
        data: {
          title: 'ganadero list'
        }
      },
      {
        path: 'ganaderoedit/:_id',
        component: GanaderoEditComponent,
        data: {
          title: 'ganadero edit'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GanaderoRoutingModule { }
