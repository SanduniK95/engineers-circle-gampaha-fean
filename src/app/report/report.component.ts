import { Component, OnInit } from '@angular/core';
import { ProjectService} from '../shared/projects/project.service'
import {project} from '../shared/projects/project.model'
import * as jspdf from 'jspdf'
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
report :string=''
projects:project[]
month :string=''

start=false
  constructor(private projectservice:ProjectService) { }
  months = [
    {value: 1, viewValue: 'January'},
    {value: 2, viewValue: 'February'},
    {value: 3, viewValue: 'March'},
    {value: 4, viewValue: 'April'},
    {value: 5, viewValue: 'May'},
    {value: 6, viewValue: 'June'},
    {value: 7, viewValue: 'July'},
    {value: 8, viewValue: 'Auguest'},
    {value: 9, viewValue: 'September'},
    {value: 10, viewValue: 'Octomber'},
    {value: 11, viewValue: 'November'},
    {value: 12, viewValue: 'December'},

  ];

  ngOnInit() {
console.log(this.start)
  }
  onchange(data){
this.month=this.months[data-1].viewValue
    
    this.projectservice.getprojectsbymonth(data).subscribe(res=>
      {
      this.projects=res as project[]
      
    })
    this.start=true
  }
  downloadReport(){
    var report =`${this.month} \n\n\n`
    var i=1
    this.projects.forEach(element => {
      report+= ` number : ${i} \n Project Name :  ${element.projectName}  \n  Date :${element.date} \n Description :${element.description} \n Venue :${element.description} \n\n`;
      i++
    });
    const doc =new jspdf()
    doc.text(report,10,10)
    doc.save('report.pdf')

  }



 

}
