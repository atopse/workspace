import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BaseService {
  
  constructor(protected http: Http) { }
 
  /**
    * Handle HTTP error
    */
  protected handleError (error: any): Promise<any> { 
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
     return Promise.reject(errMsg);
  } 
}