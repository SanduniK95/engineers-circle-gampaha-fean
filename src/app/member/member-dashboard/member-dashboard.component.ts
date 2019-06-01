import { Component, OnInit } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-member-dashboard',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  templateUrl: './member-dashboard.component.html',
  styleUrls: ['./member-dashboard.component.scss'],

})
export class MemberDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
