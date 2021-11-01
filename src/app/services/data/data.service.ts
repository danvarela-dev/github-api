import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

const headers = new HttpHeaders({
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  Authorization: `token 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`,
});

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getAll(endpoint: string) {
    return this.http.get(endpoint, { headers: headers }).pipe(
      map((response) => response),
      catchError((error) => error)  
    );
  }

  getCount(url: string) {
    return this.http.get<Response>(url + '?per_page=1', {
      observe: 'response',
    });
  }
}
