import { Injectable } from '@angular/core';
import { Http } from "@angular/http";

import 'rxjs/add/operator/toPromise';
import { Driver } from '../entity/index'


@Injectable()
export class DriverService {
 
  // private headers = new Headers({'Content-Type': 'application/json'});
  private driversURL = '/api/v1/driver/list';  // URL to web api

  constructor(private http: Http) { }

  getDrivers(): Promise<Driver[]> {
    return this.http.get(this.driversURL)
               .toPromise()
               .then(response => response.json() as Driver[])
               .catch(this.handleError);
  }
  /**
    * Handle HTTP error
    */
  private handleError (error: any): Promise<any> { 
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
     return Promise.reject(errMsg);
  } 

}
