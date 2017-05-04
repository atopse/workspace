import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent, SidebarComponent } from '../shared/index';
import { BoxComponent } from './box/box.component';
import { DriverComponent } from './box/driver/driver.component';
import { BoxNavComponent } from './box/nav/box-nav.component';
import { BoxDetailComponent } from './box/box-detail/box-detail.component';


@NgModule({
    imports: [
        CommonModule,
        NgbModule.forRoot(),
        LayoutRoutingModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        SidebarComponent,
        BoxComponent,
        DriverComponent,
        BoxNavComponent,
        BoxDetailComponent,
    ]
})
export default class LayoutModule { }
