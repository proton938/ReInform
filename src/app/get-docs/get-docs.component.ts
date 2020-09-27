import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Docs} from '../models/docs';
import {Info} from '../models/info';
import {Pager} from '../models/pager';

@Component({
  selector: 'app-get-docs',
  templateUrl: './get-docs.component.html',
  styleUrls: ['./get-docs.component.css']
})
export class GetDocsComponent implements OnInit {

  docs: Docs;
  info: Info;
  page: Pager;
  localStorage: string = '';

  constructor(private router: Router, docs: Docs, info: Info, pager: Pager) {
    this.docs = docs;
    this.info = info;
    this.page = pager;
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
  }

  ngOnInit(): void {
    this.localStorage = localStorage.getItem('docs');
    if (localStorage.getItem('docs') !== null) {
      this.docs.allDocs = JSON.parse(this.localStorage);
    }
  }

  gotoEditor(number) {
    this.page.docNumber = number;
    this.router.navigate(['edit', this.page.docNumber+1]);
  }

  createDocument() {
    this.docs.allDocs.push(this.docs.docTemplate);
    this.page.docNumber = this.docs.allDocs.length-1;
    this.router.navigate(['edit', this.page.docNumber+1]);
  }

}
