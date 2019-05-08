import { Component, OnInit,Inject } from '@angular/core';
import {ProjectService} from '../../app/shared/projects/project.service'
import {project} from '../shared/projects/project.model'
import {NgForm} from '@angular/forms';
import Swal from 'sweetalert2'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {
  Projects:project[]
  animal: string;
  name: string;
  project :project

  constructor(private projectservice :ProjectService,private modalService: NgbModal) { }
  closeResult: string;

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
  onUpdate(form:NgForm){
    this.projectservice.updateproject(form.value).subscribe(
      res=>{
        Swal.fire(
          'Updated Succesfully',
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
      }
      ,
      err=>{
        Swal.fire('Oops...', 'Something went wrong!', 'error')

      }
    )
  }

  onDelete(id){
    console.log(id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.projectservice.deleteProject(id).subscribe(
          res=>{
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
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
    })
    
  }


  open(content,project) {
  this.project=project
  console.log(this.project)
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
