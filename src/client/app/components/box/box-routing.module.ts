import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxComponent } from './box.component';
import { DriverComponent } from './driver/driver.component';
import { BoxNavComponent } from './nav/box-nav.component';

export const BoxRoutes: Routes = [
    {
        path: 'box',
        component: BoxNavComponent,
        children: [
            { path: '', component: BoxComponent },
            // { path: '', redirectTo: 'index' },
            { path: 'driver', component: DriverComponent }, 
        ]
    }
];

