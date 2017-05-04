import { Component, OnInit,Input } from '@angular/core';
import { Box } from "../entity/box";

@Component({
  moduleId:module.id,
  selector: 'atopse-box-detail',
  templateUrl: './box-detail.component.html',
  styleUrls: ['./box-detail.component.css']
})
export class BoxDetailComponent implements OnInit {

  @Input() box: Box

  constructor() { }

  ngOnInit() {
  }

}
