import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegistroPageComponent } from './pages/registro-page/registro-page.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './home/home.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistroPageComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    HomeModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
