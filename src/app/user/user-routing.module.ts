import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UserProfilePageComponent } from './user-profile-page/user-profile-page.component';

const routes: Routes = [
  {
    path: '',    
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
        data: {
          title: 'login'
        }
      }, {
        path: 'register',
        component: RegisterPageComponent,
        data: {
          title: 'register'
        }
      }, {
        path: 'profile',
        component: UserProfilePageComponent,
        data: {
          title: 'profile'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
