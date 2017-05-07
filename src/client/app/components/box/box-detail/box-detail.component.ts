import 'rxjs/add/operator/switchMap';
import { Component, OnInit,Input } from '@angular/core';
import {Router,ActivatedRoute, Params} from '@angular/router';

import { Box } from "../entity/box";
import { BoxService } from "../service/box.service";

@Component({
  moduleId:module.id,
  selector: 'atopse-box-detail',
  templateUrl: './box-detail.component.html',
  styleUrls: ['./box-detail.component.css'],
  providers:[BoxService],
})
export class BoxDetailComponent implements OnInit {

  @Input() namespace: string
  private box :Box

  // @Input() box: Box

  constructor(private boxService:BoxService,
  private router:Router,
  private route: ActivatedRoute,
  ) { }

  ngOnInit() {
     this.route.params.switchMap(params=> this.boxService.getBoxDetail(params["namespace"]))
     .subscribe(box=> this.box=box) ;
  }

}
