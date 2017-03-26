import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
 

import { DashboardComponent } from './dashboard.component';

import {TopNavComponent,SidebarComponent,FooterComponent} from '../shared/index'; 


@NgModule({
    imports: [
        CommonModule,
    	RouterModule,
    	DropdownModule,
        ModalModule, 
    ],
    declarations: [DashboardComponent, TopNavComponent, SidebarComponent,FooterComponent],
    exports: [DashboardComponent, TopNavComponent, SidebarComponent,FooterComponent]
})

export class DashboardModule { }
