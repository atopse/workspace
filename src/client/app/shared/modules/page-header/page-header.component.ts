import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-page-header',
    template: './page-header.component.html',
    styles: ['./page-header.component.scss']
})
export class PageHeaderComponent {
    @Input() heading: string;
    @Input() icon: string;
}
