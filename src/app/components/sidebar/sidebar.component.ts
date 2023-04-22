import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/user-profile', title: 'Profile',  icon:'ni-single-02 text-yellow', class: '' },
    { path: '/tables', title: 'Faculty',  icon:'ni-bullet-list-67 text-red', class: '' },
    { path: '/dashboard', title: 'Admin Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/capstonegrouplist', title: 'Capstone Group List',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/panelsandadviser', title: 'Panels and Adviser',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/reportgeneration', title: 'Report Generation',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/icons', title: 'Working',  icon:'ni-planet text-blue', class: '' },
    { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    { path: '/registerOptions', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
    
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
