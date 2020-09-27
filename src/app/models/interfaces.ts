export interface Doctype {
  id: string;
  author: Author;
  docCode: string;
  docDate: string;
  docName: string;
  docType: string;
  address: string;
  status: string;
  isSpecial: boolean;
}

export interface  Author {
  account: string;
  fio: string;
  post: string;
}
