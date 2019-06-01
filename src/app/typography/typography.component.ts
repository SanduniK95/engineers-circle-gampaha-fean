import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { extend } from '@syncfusion/ej2-base';
import {
    EventSettingsModel, View, EventRenderedArgs, DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService
} from '@syncfusion/ej2-angular-schedule';
import {ProjectService} from '../shared/projects/project.service'
import {project} from '../shared/projects/project.model'
@Component({
  selector: 'app-typography',
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService, ResizeService, DragAndDropService],
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.css'],
})

export class TypographyComponent implements OnInit {
projects:project[]
Projects :Object[]=[
   
]
  zooEventsData: Object[] = [
    {
        Id: 1,
        Subject: 'Story Time for Kids',
        StartTime: new Date(2019, 5, 12, 10, 0),
        EndTime: new Date(2019, 5, 12, 11, 30),
        CategoryColor: '#1aaa55'
    }, {
        Id: 2,
        Subject: 'Camping with Turtles',
        StartTime: new Date(2018, 1, 12, 12, 0),
        EndTime: new Date(2018, 1, 12, 14, 0),
        CategoryColor: '#357cd2'
    }, {
        Id: 3,
        Subject: 'Wildlife Warriors',
        StartTime: new Date(2018, 1, 13, 10, 0),
        EndTime: new Date(2018, 1, 13, 11, 30),
        CategoryColor: '#7fa900'
    }, {
        Id: 4,
        Subject: 'Parrot Talk',
        StartTime: new Date(2018, 1, 14, 9, 0),
        EndTime: new Date(2018, 1, 14, 10, 0),
        CategoryColor: '#ea7a57'
    }, {
        Id: 5,
        Subject: 'Birds of Prey',
        StartTime: new Date(2018, 1, 15, 10, 0),
        EndTime: new Date(2018, 1, 15, 11, 30),
        CategoryColor: '#00bdae'
    }, {
        Id: 6,
        Subject: 'Croco World',
        StartTime: new Date(2018, 1, 16, 12, 0),
        EndTime: new Date(2018, 1, 16, 14, 0),
        CategoryColor: '#f57f17'
    }, {
        Id: 7,
        Subject: 'Venomous Snake Hunt',
        StartTime: new Date(2018, 1, 17, 10, 0),
        EndTime: new Date(2018, 1, 17, 11, 30),
        CategoryColor: '#1aaa55'
    }, {
        Id: 8,
        Subject: 'Face Painting & Drawing events',
        StartTime: new Date(2018, 1, 19, 9, 30),
        EndTime: new Date(2018, 1, 19, 11, 0),
        CategoryColor: '#357cd2'
    }, {
        Id: 9,
        Subject: 'Pony Rides',
        StartTime: new Date(2018, 1, 21, 11, 0),
        EndTime: new Date(2018, 1, 21, 13, 0),
        CategoryColor: '#7fa900'
    }, {
        Id: 10,
        Subject: 'Feed the Giants',
        StartTime: new Date(2018, 1, 22, 9, 30),
        EndTime: new Date(2018, 1, 22, 11, 0),
        CategoryColor: '#ea7a57'
    }, {
        Id: 11,
        Subject: 'Jungle Treasure Hunt',
        StartTime: new Date(2018, 1, 9, 10, 0),
        EndTime: new Date(2018, 1, 9, 11, 30),
        CategoryColor: '#00bdae'
    }, {
        Id: 12,
        Subject: 'Endangered Species Program',
        StartTime: new Date(2018, 1, 7, 10, 30),
        EndTime: new Date(2018, 1, 7, 12, 30),
        CategoryColor: '#f57f17'
    }, {
        Id: 13,
        Subject: 'Black Cockatoos Playtime',
        StartTime: new Date(2018, 1, 5, 10, 0),
        EndTime: new Date(2018, 1, 5, 11, 30),
        CategoryColor: '#1aaa55'
    }, {
        Id: 14,
        Subject: 'Walk with Jungle King',
        StartTime: new Date(2018, 1, 14, 12, 0),
        EndTime: new Date(2018, 1, 14, 14, 0),
        CategoryColor: '#357cd2'
    }, {
        Id: 15,
        Subject: 'Trained Climbers',
        StartTime: new Date(2018, 1, 19, 13, 0),
        EndTime: new Date(2018, 1, 19, 14, 30),
        CategoryColor: '#7fa900'
    }, {
        Id: 16,
        Subject: 'Playtime with Chimpanzees',
        StartTime: new Date(2018, 1, 22, 13, 0),
        EndTime: new Date(2018, 1, 22, 14, 30),
        CategoryColor: '#ea7a57'
    }, {
        Id: 17,
        Subject: 'Story Time for Kids',
        StartTime: new Date(2018, 1, 13, 14, 30),
        EndTime: new Date(2018, 1, 13, 16, 0),
        CategoryColor: '#1aaa55'
    }, {
        Id: 18,
        Subject: 'Black Cockatoos Playtime',
        StartTime: new Date(2018, 1, 15, 14, 30),
        EndTime: new Date(2018, 1, 15, 16, 0),
        CategoryColor: '#7fa900'
    }
];


  constructor(private projectservice :ProjectService) { }

  ngOnInit() {
this.projectservice.getprojects().subscribe(
    res=>{
        var pro =[]
        this.projects =res as project[]
        var i =1
        this.projects.map(pro=>{
            var date =pro.date.toString()
            var stime =pro.startTime.toString()
            var etime =pro.endTime.toString()
           var StartTime=moment(date +" " +stime,"YYYY-MM-DD HH:mm")
           var EndTime =moment(date +" " +etime,"YYYY-MM-DD HH:mm")
            var obj ={
                Id :i,
                Subject :pro.projectName,
                StartTime:StartTime.toDate(),
                EndTime:EndTime.toDate(),
                CategoryColor: '#7fa900'

            }
            console.log(obj)
            this.Projects.push(obj)
        
            i++

        })
        console.log(this.Projects)
        console.log(this.zooEventsData)
    },
    err=>{

    }
)
  }
  public data: Object[] = <Object[]>extend([], this.Projects, null, true);
  public selectedDate: Date = new Date(2019, 4, 24);
  public eventSettings: EventSettingsModel = { dataSource: this.data };
  public currentView: View = 'Month';

  oneventRendered(args: EventRenderedArgs): void {
      let categoryColor: string = args.data.CategoryColor as string;
      if (!args.element || !categoryColor) {
          return;
      }
      if (this.currentView === 'Agenda') {
          (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
      } else {
          args.element.style.backgroundColor = categoryColor;
      }
  }

}
