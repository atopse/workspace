import { Injectable } from '@angular/core';
import {BaseService} from '../../../shared/services/base.service'

import {Box} from '../entity/index'

@Injectable()
export class BoxService extends BaseService {
  
  private boxsURL = '/api/v1/box/list';  // URL to web api 

  getDrivers(): Promise<Box[]> {
    return this.http.get(this.boxsURL)
               .toPromise()
               .then(response => response.json() as Box[])
               .catch(this.handleError);
  } 

  /**
   * 获取魔盒详情
   */
  getBoxDetail(namespace:string): Promise<Box>{
      return this.http.get("/api/v1/box/detail/"+namespace)
        .toPromise()
        .then(response=>response.json() as Box)
        .catch(this.handleError); 
  }
}
