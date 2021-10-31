import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `token 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`
})

@Injectable()
export class DataService {
  constructor( private http: HttpClient) {}

  getAll(endpoint:string) {
    return this.http.get(endpoint,{headers:headers}).pipe( map( response => response));
  }

}
