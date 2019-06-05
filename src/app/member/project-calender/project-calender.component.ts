import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { extend } from '@syncfusion/ej2-base';
import { EventSettingsModel, View, DayService, WeekService, WorkWeekService, MonthService, AgendaService }
    from '@syncfusion/ej2-angular-schedule';
import {ProjectService} from '../../shared/projects/project.service'
import {project} from '../../shared/projects/project.model'
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
@Component({
  selector: 'app-project-calender',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  templateUrl: './project-calender.component.html',
  styleUrls: ['./project-calender.component.scss']
})
export class ProjectCalenderComponent implements OnInit {

  constructor(private projectservice :ProjectService) { }

  ngOnInit() {
  }
  public selectedDate: Date = new Date(2019, 4, 5);
  public currentView: View = 'Month';
  public readonly: boolean = true;
  private dataManger: DataManager = new DataManager({
      url: 'http://localhost:4000/api/getclaenderdata',
      adaptor: new WebApiAdaptor,
      crossDomain: true
  });
  public eventSettings: EventSettingsModel = { dataSource: this.dataManger };
}








