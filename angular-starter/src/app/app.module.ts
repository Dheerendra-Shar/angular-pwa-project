import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
 
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactModule } from './modules/general/contact/contact.module';
import { LoginModule } from './modules/general/login/login.module';
import { SignupModule } from './modules/general/signup/signup.module';
import { AboutModule } from './modules/general/about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
 
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ContactModule,
    // LoginModule,
    // SignupModule,
    // AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
