import { Component, OnInit } from '@angular/core';
import { Box } from "./entity/box";
import { BoxService } from "./service/box.service";

@Component({
  moduleId:module.id,
  selector: 'atopse-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  providers:[BoxService]
})
export class BoxComponent implements OnInit {

  boxs: Box[]=[];

  constructor(private boxService:BoxService) { }

  ngOnInit() {
    this.boxService.getDrivers().then(boxs=>{
       this.boxs=boxs;
    })
  }

}
