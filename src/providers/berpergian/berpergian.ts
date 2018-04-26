import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { AppProvider } from "../app/app";
import { Observable } from "rxjs/Observable";
/*
  Generated class for the BerpergianProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BerpergianProvider {

  constructor(public app: AppProvider, private http: HttpClient) {
    console.log('Hello BerpergianProvider Provider');
  }

  findTravel(origin: any, destination: any , passenger: any , facility:any ): Observable<any> {
    return this.http.get(this.app.apiUrl + 'rencana/bepergian/' + origin + '/' + destination + '/' + passenger  + '/' + facility, {responseType: "json"});
  }

  detailService(id: any): Observable<any> {
    return this.http.get(this.app.apiUrl + 'rencana/detailService/' + id, {responseType: "json"});
  }

  insertTransaction(body, id: any) {
    return new Promise(resolve => {
      this.http.post(this.app.apiUrl + 'rencana/create/' + id, body, {responseType: "json"})
        .subscribe(data => {
          resolve(data);
        });
    });
  }

}
