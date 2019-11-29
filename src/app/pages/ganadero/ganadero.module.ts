import { NgModule } from '@angular/core';
import { GanaderoRoutingModule } from './ganadero-routing.module';
import { GanaderoCreateComponent } from './ganadero-create/ganadero-create.component';
import { GanaderoListComponent } from './ganadero-list/ganadero-list.component';
import { GanaderoEditComponent } from './ganadero-edit/ganadero-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [GanaderoCreateComponent, GanaderoListComponent, GanaderoEditComponent],
  imports: [
    GanaderoRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    NgxSpinnerModule,
    NgxPaginationModule

  ]
})
export class GanaderoModule { }
