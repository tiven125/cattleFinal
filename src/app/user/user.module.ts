import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';
import { UserRoutingModule } from './user-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';


import { NgxSpinnerModule } from 'ngx-spinner';



@NgModule({
  declarations: [ LoginPageComponent, RegisterPageComponent, UserProfilePageComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    AgmCoreModule,
  ]
})
export class UserModule { }
