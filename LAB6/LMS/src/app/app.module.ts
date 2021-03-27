import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LearningPageComponent } from './learning-page/learning-page.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RoutingModule } from './routing/routing.module';
import { SubjectPageComponent } from './subject-page/subject-page.component';
import { HeaderComponent } from './header/header.component';
import { AppConfigService } from './Services/app-config.service';

export function appInit(appConfig: AppConfigService) {
  return () => appConfig.load();
}
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
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [
      {
          provide: APP_INITIALIZER,
          multi: true,
          deps: [AppConfigService],
          useFactory: appInit
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
