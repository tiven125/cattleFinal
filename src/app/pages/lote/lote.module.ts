import { LoteCreateComponent } from './lote-create/lote-create.component';
import { LoteListComponent } from './lote-list/lote-list.component';
import { LoteEditComponent } from './lote-edit/lote-edit.component';
import { LoteRoutingModule } from './lote-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgSelectModule} from '@ng-select/ng-select';


import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [LoteCreateComponent, LoteListComponent, LoteEditComponent],
  imports: [
    CommonModule,
    LoteRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule,
     NgSelectModule,
     NgxPaginationModule
     
  ]
})
export class LoteModule { }
