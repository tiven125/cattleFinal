import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoteCreateComponent } from './lote-create/lote-create.component';
import { LoteEditComponent } from './lote-edit/lote-edit.component';
import { LoteListComponent } from './lote-list/lote-list.component';




const routes: Routes = [
  {
    path: '',    
    children: [
      
      {
        path: 'lotelist',
        component: LoteListComponent,
        data: {
          title: 'lote list'
        }
      },
      {
        path: 'lotecreate',
        component: LoteCreateComponent,
        data: {
          title: 'lote create'
        }
      },
      {
        path: 'loteedit/:_id',
        component: LoteEditComponent,
        data: {
          title: 'lote edit'
        }
      }

      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoteRoutingModule { }
