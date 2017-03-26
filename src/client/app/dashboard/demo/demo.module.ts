import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { ChartModule } from './charts/chart.module';
import { TableModule } from './tables/table.module';
import { FormModule } from './forms/forms.module';
import { GridModule } from './grid/grid.module';
import { BSComponentModule } from './bs-component/bsComponent.module';
import { BSElementModule } from './bs-element/bsElement.module';
import { BlankPageModule } from './blank-page/blankPage.module';


import { DemoRoutesModule } from './demo.routes';

@NgModule({
    imports: [
        DemoRoutesModule,
        HomeModule,
        ChartModule,
        TableModule,
        FormModule,
        GridModule,
        BSComponentModule,
        BSElementModule,
        BlankPageModule
    ],
    declarations: [],
})
export class DemoModule { }
