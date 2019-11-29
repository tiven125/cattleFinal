import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BovinoListComponent } from './bovino-list/bovino-list.component';
import { BovinoCreateComponent } from './bovino-create/bovino-create.component';
import { BovinoEditComponent } from './bovino-edit/bovino-edit.component';




const routes: Routes = [
  {
    path: '',    
    children: [
      
      {
        path: 'bovinolist',
        component: BovinoListComponent,
        data: {
          title: 'bovino list'
        }
      },
      {
        path: 'bovinocreate',
        component: BovinoCreateComponent,
        data: {
          title: 'bovino create'
        }
      },
      {
        path: 'bovinoedit/:_id',
        component: BovinoEditComponent,
        data: {
          title: 'bovino edit'
        }
      }

      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BovinoRoutingModule { }
