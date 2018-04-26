import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppProvider } from "../app/app";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";

/*
  Generated class for the PerjalananProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PerjalananProvider {

  constructor(public app: AppProvider, private http: HttpClient) {
    console.log('Hello PerjalananProvider Provider');
  }

  findTravel(origin: any, destination: any): Observable<any> {
    return this.http.get(this.app.apiUrl + 'perjalanan/findService/' + origin + '/' + destination, {responseType: "json"});

  }

  detailService(id: any): Observable<any> {
    return this.http.get(this.app.apiUrl + 'perjalanan/detailService/' + id, {responseType: "json"});
  }

  insertTransaction(body, id: any) {
    return new Promise(resolve => {
      this.http.post(this.app.apiUrl + 'perjalanan/create/' + id, body, {responseType: "json"})
        .subscribe(data => {
          resolve(data);
        });
    });
  }
}
