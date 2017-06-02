import { Contact } from './contact.model';
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map'

@Injectable()
export class ContactService {
  private baseUrl = 'http://localhost:3000';
  private headers = new Headers();

  constructor(private http: Http) {
    this.headers.append('Content-type','application/json');
  }

  getContacts(): Observable<Contact[]> {

    const options = new RequestOptions({headers:this.headers});

    return this.http.get(`${this.baseUrl}/contacts`, options)
                    // json() on the response to return data
                    .map((res: Response) => res.json())
                    // errors if any
                    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
