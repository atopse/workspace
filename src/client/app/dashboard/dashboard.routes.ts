import { Route } from '@angular/router';
 
import { DashboardComponent } from './index';

export const DashboardRoutes: Route[] = [
  	{
    	path: 'dashboard',
    	component: DashboardComponent,
    	children: [
        {path:"demo",loadChildren:'app/dashboard/demo/demo.module#DemoModule'}, 
    	]
  	}
];
