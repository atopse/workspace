import { Injectable } from '@angular/core';
import {BaseService} from '../../../shared/services/base.service'

import {Box} from '../entity/index'

@Injectable()
export class BoxService extends BaseService {
  
  private driversURL = '/api/v1/box/list';  // URL to web api
 

  getDrivers(): Promise<Box[]> {
    return this.http.get(this.driversURL)
               .toPromise()
               .then(response => response.json() as Box[])
               .catch(this.handleError);
  } 
}
