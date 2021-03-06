import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/profile', title: 'User Profile',  icon:'person', class: '' },
  { path: '/ProjectCalender', title: 'Project-Calender',  icon:'library_books', class: '' },
  { path: '/payment', title: 'Payment',  icon:'payment', class: '' },
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
