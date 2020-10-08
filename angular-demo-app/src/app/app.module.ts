import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularDemoLibModule } from 'projects/angular-demo-lib/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularDemoLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
