import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PesokiloCreateComponent } from './pesokilo-create/pesokilo-create.component';
import { PesokiloListComponent } from './pesokilo-list/pesokilo-list.component';
import { PesokiloEditComponent } from './pesokilo-edit/pesokilo-edit.component';
import { PesokiloRoutingModule } from './pesokilo-routing.module';
import { ReactiveFormsModule } from "@angular/forms"; 
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [PesokiloCreateComponent, PesokiloListComponent, PesokiloEditComponent],
  imports: [
    CommonModule,
    PesokiloRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
    NgxPaginationModule,
    
    


    
  ]
})
export class PesokiloModule { }
