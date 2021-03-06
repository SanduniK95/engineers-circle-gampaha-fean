import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Projects',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Project Calender',  icon:'library_books', class: '' },
    { path: '/project-requests', title: 'Project Requests',  icon:'folder_shared', class: '' },
    { path: '/manage-users', title: 'Customer Details',  icon:'person', class: '' },
    { path: '/report', title: 'Report Generation',  icon:'book', class: '' },
    { path: '/manage-payment', title: 'Manage Payment',  icon:'payment', class: '' }   
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
