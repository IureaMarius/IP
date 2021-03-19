import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LearningPageComponent } from './learning-page/learning-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RoutingModule } from './routing/routing.module';
import { SubjectPageComponent } from './subject-page/subject-page.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LearningPageComponent,
    ForgotPasswordComponent,
    SubjectPageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
