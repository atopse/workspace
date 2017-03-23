import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'top-nav',
    templateUrl: 'topnav.html',
})

export class TopNavComponent {
	changeTheme(color: string): void {
		var link: any = $('<link>');
		link
			.appendTo('head')
			.attr({type : 'text/css', rel : 'stylesheet'})
			.attr('href', 'themes/app-'+color+'.css');
	}
 
	sidebarToggler(): void  {
		var body: any = $('body');
		body.toggleClass('nav-md').toggleClass('nav-sm'); 
	}
}
