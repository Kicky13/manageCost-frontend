import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the AppProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppProvider {

  public apiUrl = 'http://localhost:8000/api/';
  public imgUrl = 'http://localhost:8000/img/travel/';


  constructor() {
    console.log('Hello AppProvider Provider');
  }

  public extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  public handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? '${error.status} - ${error.statusText}' : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

