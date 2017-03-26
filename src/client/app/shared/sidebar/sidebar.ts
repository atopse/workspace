import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
	moduleId: module.id,
	selector: 'sidebar-cmp',
	templateUrl: 'sidebar.html'
})

export class SidebarComponent { 
	constructor(private router:Router){

	}  
	/**
	 * 判断是否该路由已被Active，使用非精准模式匹配。
	 * @param url 菜单路由地址
	 */
	isActive(url: string): boolean {
		return this.router.isActive(url,false);
  	} 
}

// TODO：需要实现点击菜单时，自动合并/展开子菜单，现在是默认全部显示