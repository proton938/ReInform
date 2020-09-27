import { Component, OnInit } from '@angular/core';
import {Docs} from '../models/docs';
import {Pager} from '../models/pager';

@Component({
  selector: 'app-editor-doc',
  templateUrl: './editor-doc.component.html',
  styleUrls: ['./editor-doc.component.css']
})
export class EditorDocComponent implements OnInit {

  docs: Docs;
  page: Pager;
  localStorage = '';

  constructor(docs: Docs, pager: Pager) {
    this.docs = docs;
    this.page = pager;
  }

  ngOnInit(): void {
  }

  saveInput() {
    var date: Date = new Date();
    this.docs.allDocs[this.page.docNumber].docDate = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    localStorage.setItem('docs', JSON.stringify(this.docs.allDocs));
    this.localStorage = localStorage.getItem('docs');
  }

}
