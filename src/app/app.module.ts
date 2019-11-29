import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrgainizationSetUpComponent } from './orgainization-set-up/orgainization-set-up.component';
import { AppRoutingModule } from './app-routing.module';
import { NewRegistrationComponent } from './new-registration/new-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    OrgainizationSetUpComponent,
    NewRegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
