import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/member-dashboard', title: 'Dashboard', icon: 'dashboard', class: '' },
  { path: '/ProjectCalender', title: 'Project-Calender',  icon:'library_books', class: '' },
  { path: '/payment', title: 'Payment',  icon:'bubble_chart', class: '' },
  { path: '/mapsss', title: 'Maps',  icon:'location_on', class: '' },
];

@Component({
  selector: 'app-member-sidebar',
  templateUrl: './member-sidebar.component.html',
  styleUrls: ['./member-sidebar.component.scss']
})
export class MemberSidebarComponent implements OnInit {
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
