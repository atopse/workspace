import { Component, AfterViewInit, HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
/**
*	懒加载 DashboardComponent.
*/
@Component({
	moduleId: module.id,
	selector: 'dashboard-cmp',
	templateUrl: 'dashboard.component.html',
})

export class DashboardComponent {
	contentHeight: number;
	/**
	 * 顶部菜单高度
	 */
	topNavFixedHeight: number = 20;
	/**
	 * 底部Footer高度
	 */
	footerFixedHeight: number = 20;

	constructor(private router: Router) {

		//订阅路由变更世界，如果发生变化需要重新适配大小。
		router.events
			.filter(event => event instanceof NavigationEnd)
			.subscribe((event: NavigationEnd) => {
				this.resetContentMinHeight();
			});
	}
	@HostListener('window:resize', ['$event'])
	onResize() {
		this.resetContentMinHeight();
	}
	/**
	 * 重置内容也最小高度
	 */
	resetContentMinHeight() {
		this.contentHeight = window.innerHeight - this.topNavFixedHeight - this.footerFixedHeight;
	}
}
