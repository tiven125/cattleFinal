import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BovinoCreateComponent } from './bovino-create/bovino-create.component';
import { BovinoListComponent } from './bovino-list/bovino-list.component';
import { BovinoEditComponent } from './bovino-edit/bovino-edit.component';
import { BovinoRoutingModule } from './bovino-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [BovinoCreateComponent, BovinoListComponent, BovinoEditComponent],
  imports: [
    CommonModule,
    BovinoRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgxSpinnerModule,
    NgSelectModule
  ]
})
export class BovinoModule { }
