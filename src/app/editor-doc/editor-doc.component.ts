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
    localStorage.setItem('docs', JSON.stringify(this.docs.allDocs));
    this.localStorage = localStorage.getItem('docs');
  }

}
