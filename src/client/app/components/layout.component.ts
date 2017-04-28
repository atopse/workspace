import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    moduleId:module.id,
    selector: 'app-layout',
    templateUrl:'layout.component.html',
    // template: require(''),
    styleUrls: ['layout.component.css']
})
export class LayoutComponent implements OnInit {
    constructor(public router: Router) { }
    ngOnInit() {
        console.log("url:",this.router.url)
        // if (this.router.url === '/') {
        //     this.router.navigate(['/home']);
        // }
    }
}
