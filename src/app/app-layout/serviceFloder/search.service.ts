import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class SearchService {
  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();
  constructor(private _http: Http) { }

  search(queryString: string) {
    let _URL = 'https://daas-qa-sig-api.circleback.com/service/contactcloud/companies/autocomplete?company_name=' + queryString;
    return this._http.get(_URL);
  }

  changeMessage(message) {
    this.messageSource.next(message)
  }
}
