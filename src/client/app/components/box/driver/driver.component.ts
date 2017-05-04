import { Component, OnInit } from '@angular/core';

import {DriverService} from '../service/driver.service'
import {Driver} from '../entity/index'

@Component({
  moduleId:module.id,
  selector: 'atopse-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css'],
  providers:[DriverService]
})
export class DriverComponent implements OnInit {
  drivers: Driver[]=[];

  constructor(private driverService:DriverService) { }

  ngOnInit() {
      this.driverService.getDrivers()
      .then(drivers=>{
        console.log(drivers);
        this.drivers=drivers;
        // console.log(this.drivers.length);
        
      });
  }

}
