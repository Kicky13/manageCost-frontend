import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppProvider } from "../app/app";
import { Observable } from "rxjs/Observable";

/*
  Generated class for the TravelPartnerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TravelPartnerProvider {

  travels: any;

  constructor(public app: AppProvider, private http: HttpClient) {
    console.log('Hello TravelPartnerProvider Provider');
  }

  getTravel(): Observable<any> {
    return this.http.get(this.app.apiUrl + 'travel', {responseType: "json"})
  }

}



