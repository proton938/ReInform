import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
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
  cookieValue = '';

  constructor(private cookie: CookieService, docs: Docs, pager: Pager) {
    this.docs = docs;
    this.page = pager;
  }

  ngOnInit(): void {
  }

  saveInput() {
    this.cookie.set('cookie', JSON.stringify(this.docs.allDocs) );
    this.cookieValue = this.cookie.get('cookie');
    alert(this.cookieValue);
  }

}
