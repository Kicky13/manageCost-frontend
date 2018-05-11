import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppProvider } from "../app/app";
import { Observable } from "rxjs/Observable";

/*
  Generated class for the FilterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FilterProvider {

  constructor(public app: AppProvider, private http: HttpClient) {
    console.log('Hello FilterProvider Provider');
  }
  findTravel(origin: any, destination: any, facility: any, car: any, date: any): Observable<any> {
    return this.http.get(this.app.apiUrl + 'perjalanan/findService/' + origin + '/' + destination + facility + '/' + car + '/' + date, {responseType: "json"});
  }

}
