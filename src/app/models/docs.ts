import { Injectable } from '@angular/core';
import { Doctype } from './interfaces';

@Injectable()

export class Docs {
  allDocs: Doctype[] = [
    {
      id: 'yok0cpn5g7j0n1ck',
      author: {
        account: 'semenov_gn',
        fio: 'Семенов Геннадий Николаевич',
        post: 'Главный специалист'
      },
      docCode: 'bchqihg90v6viqq1ogak93dffrke19gm',
      docDate: '2018-09-27',
      docName: 'Заявление о внесении в реестр №271',
      docType: 'request',
      address: 'г. Москва, ул. Академика Королева, 32',
      status: 'registred',
      isSpecial: true
    },
    {
      id: 'xyxepbuv9s45ake7',
      author: {
        account: 'antonov_ds',
        fio: 'Антонов Дмитрий Сергеевич',
        post: 'Специалист'
      },
      docCode: 'ag4r795cevrlmozxvtjfbjyw79ve1f7f',
      docDate: '2018-09-30',
      docName: 'Свидетельство об утверждении проекта планировки №0028',
      docType: 'certificate',
      address: 'г. Москва, 2-й Южнопортовый проезд, 19к1',
      status: 'accepted',
      isSpecial: false
    }
  ];


  docTemplate: Doctype =
    {
      id: '',
      author: {
        account: '',
        fio: '',
        post: ''
      },
      docCode: '',
      docDate: '',
      docName: '',
      docType: '',
      address: '',
      status: '',
      isSpecial: false
    }
  ;

}


