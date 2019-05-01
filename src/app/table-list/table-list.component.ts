import { Component, OnInit } from '@angular/core';
import {ProjectService} from '../../app/shared/projects/project.service'
import {project} from '../shared/projects/project.model'
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  Projects:project[]

  constructor(private projectservice :ProjectService) { }

  ngOnInit() {
    this.projectservice.getprojects().subscribe(
      res=>{
        this.Projects =res as project[]
       
          
       
      },
      err =>{
        console.log(err)
      }
    )
  }
  onSubmit(form : NgForm){
    this.projectservice.postProject(form.value).subscribe(
      res=>{
        Swal.fire(
          'Submitted Succesfully',
          'success'
        )
        this.projectservice.getprojects().subscribe(
          res=>{
            this.Projects =res as project[]  
          },
          err =>{
            console.log(err)
          }
        )

      },
      err=>{
        Swal.fire('Oops...', 'Something went wrong!', 'error')

      }
    )
  }

  onDelete(id){
    console.log(id)
    this.projectservice.deleteProject(id).subscribe(
      res=>{
        Swal.fire(
          'Deleted Succesfully',
          'success'
        )
        this.projectservice.getprojects().subscribe(
          res=>{
            this.Projects =res as project[]  
          },
          err =>{
            console.log(err)
          }
        )

      },
      err=>{
        Swal.fire('Oops...', 'Something went wrong!', 'error')

      }
    )
  }

}
