import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CookieService} from 'ngx-cookie-service'

import { AppComponent } from './app.component';
import {Docs} from './models/docs';
import {Info} from './models/info';
import { GetDocsComponent } from './get-docs/get-docs.component';

@NgModule({
  declarations: [
    AppComponent,
    GetDocsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CookieService, Docs, Info],
  bootstrap: [AppComponent]
})
export class AppModule { }
