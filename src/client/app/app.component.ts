import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Config } from './shared/config/env.config';
import './operators';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
    constructor(public router: Router) { 
    	console.log('Environment config', Config);
    }
    ngOnInit() {
        // this.router.navigate(['/login']);
    }
} 