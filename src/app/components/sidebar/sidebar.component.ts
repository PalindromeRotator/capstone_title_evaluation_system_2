import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/user-profile', title: 'Profile', icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/capstonegrouplist', title: 'Capstone Titles', icon: 'ni-books text-pink', class: '' },
  // { path: '/panelsandadviser', title: 'Panels and Adviser', icon: 'ni-circle-08 text-pink', class: '' },
  { path: '/reportgeneration', title: 'Report Generation', icon: 'ni-single-copy-04 text-pink', class: '' },
  { path: '/contentmanagement', title: 'Content Management', icon: 'ni-ui-04 text-pink', class: '' },

];

export const ROUTES_FACULTY: RouteInfo[] = [
  { path: '/user-profile', title: 'Profile', icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/capstonegrouplist', title: 'Capstone Title', icon: 'ni-circle-08 text-pink', class: '' },
  { path: '/reportgeneration', title: 'Report Generation', icon: 'ni-circle-08 text-pink', class: '' },
  { path: '/contentmanagement', title: 'Content Management', icon: 'ni-circle-08 text-pink', class: '' },

];
export const ROUTES_COORDINATOR: RouteInfo[] = [
  { path: '/user-profile', title: 'Profile', icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/capstonegrouplist', title: 'Capstone Group List', icon: 'ni-circle-08 text-pink', class: '' },
  { path: '/reportgeneration', title: 'Report Generation', icon: 'ni-single-copy-04 text-pink', class: '' },
  { path: '/contentmanagement', title: 'Content Management', icon: 'ni-ui-04 text-pink', class: '' },

];

export const ROUTES_ADMIN: RouteInfo[] = [
  { path: '/user-profile', title: 'Profile', icon: 'ni-single-02 text-yellow', class: '' },
  { path: '/dashboard', title: 'Admin Dashboard', icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/tables', title: 'Accounts', icon: 'ni-circle-08', class: '' },
  { path: '/capstonegrouplist', title: 'Capstone Title', icon: 'ni-books text-pink', class: '' },
  { path: '/reportgeneration', title: 'Report Generation', icon: 'ni-single-copy-04 text-pink', class: '' },
  { path: '/contentmanagement', title: 'Content Management', icon: 'ni-ui-04 text-pink', class: '' },



];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public file: any;
  public menuItems: any[];
  public menuItemsAdmin: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.file = localStorage.getItem('content-image') ?? "../../../assets/img/brand/favicon0.png";
    if (localStorage.getItem('user_type') === 'admin') {
      this.menuItems = ROUTES_ADMIN.filter(menuItem => menuItem);

    }
    else if (localStorage.getItem('user_type') === 'faculty') {
      this.menuItems = ROUTES_FACULTY.filter(menuItem => menuItem);
    }
    else if (localStorage.getItem('user_type') === 'capstone_coordinator') {
      this.menuItems = ROUTES_COORDINATOR.filter(menuItem => menuItem);
    }
    else {
      this.menuItems = ROUTES.filter(menuItem => menuItem);
    }

    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }
}
