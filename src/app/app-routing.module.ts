import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {GetDocsComponent} from './get-docs/get-docs.component';
import { EditorDocComponent } from './editor-doc/editor-doc.component';


const routes: Routes = [
  {path: '', component: GetDocsComponent },
  {path: 'edit', component: EditorDocComponent },
  {path: 'edit/:id', component: EditorDocComponent }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
