import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ChartComponent } from './charts/chart.component';
import { BlankPageComponent } from './blank-page/blankPage.component';
import { TableComponent } from './tables/table.component';
import { FormComponent } from './forms/forms.component';
import { GridComponent } from './grid/grid.component';
import { BSComponentComponent } from './bs-component/bsComponent.component';
import { BSElementComponent } from './bs-element/bsElement.component';

export const DemoRoutes: Routes = [
    { path: 'home', component: HomeComponent, },
    { path: 'chart', component: ChartComponent, },
    { path: 'blank', component: BlankPageComponent, },
    { path: 'tables', component: TableComponent, },
    { path: 'forms', component: FormComponent, },
    { path: 'grid', component: GridComponent, },
    { path: 'components', component: BSComponentComponent, },
    { path: 'element', component: BSElementComponent, },
];
// 通过下面的方式定义了一个子路由模块
@NgModule({
    imports: [RouterModule.forChild(DemoRoutes)],
    exports: [RouterModule]
})
export class DemoRoutesModule { }
