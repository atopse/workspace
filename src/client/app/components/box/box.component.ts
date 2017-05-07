import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { Box } from "./entity/box";
import { BoxService } from "./service/box.service";
import { BoxDetailComponent } from "./box-detail/box-detail.component";

@Component({
  moduleId:module.id,
  selector: 'atopse-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  providers:[BoxService]
})
export class BoxComponent implements OnInit {

  boxs: Box[]=[];

  constructor(
    private boxService:BoxService,
    private router:Router) { }

  ngOnInit() {
    this.boxService.getDrivers().then(boxs=>{
       this.boxs=boxs;
    })
  }
  open(content: any){
    // this.modalService.open(content);
    // const modalRef = this.modalService.open(BoxDetailComponent);
    // modalRef.componentInstance.box=box;
  }
  onSelect(box: Box){ 
     this.router.navigate(['/box/detail',box.namespace])
  }

}
