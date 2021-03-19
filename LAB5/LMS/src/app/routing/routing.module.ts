import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from '../login-page/login-page.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LearningPageComponent } from '../learning-page/learning-page.component';
import { SubjectPageComponent } from '../subject-page/subject-page.component';

const routes: Routes = [
    { path: 'forgot-password', component: ForgotPasswordComponent },
    { path: 'subjects', component: LearningPageComponent },
    { path: 'subject', component: SubjectPageComponent },
    { path: '', component: LoginPageComponent }
];



@NgModule({
  declarations: [],
  imports: [
      RouterModule.forRoot(routes),
      CommonModule
  ],
  exports: [RouterModule]
})
export class RoutingModule { }
