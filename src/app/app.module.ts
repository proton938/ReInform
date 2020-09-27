import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {CookieService} from 'ngx-cookie-service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Docs} from './models/docs';
import {Info} from './models/info';
import {Pager} from './models/pager';
import { GetDocsComponent } from './get-docs/get-docs.component';
import { EditorDocComponent } from './editor-doc/editor-doc.component';

@NgModule({
  declarations: [
    AppComponent,
    GetDocsComponent,
    EditorDocComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CookieService, Docs, Info, Pager],
  bootstrap: [AppComponent]
})
export class AppModule { }
