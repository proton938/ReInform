import { Component, OnInit } from '@angular/core';
import {Docs} from '../models/docs';
import {Info} from '../models/info';

@Component({
  selector: 'app-get-docs',
  templateUrl: './get-docs.component.html',
  styleUrls: ['./get-docs.component.css']
})
export class GetDocsComponent implements OnInit {

  docs: Docs;
  info: Info;

  constructor(docs: Docs, info: Info) {
    this.docs = docs;
    this.info = info;
  }

  ngOnInit(): void {
    // alert(JSON.stringify(this.docs.pageNumber));
  }

}
