import { Component, OnInit } from '@angular/core';
import { ExternalProjectsService } from '../shared/external-projects/external-projects.service';
import { externalProject } from '../shared/external-projects/external-projects.model';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-project-requests',
  templateUrl: './project-requests.component.html',
  styleUrls: ['./project-requests.component.scss']
})
export class ProjectRequestsComponent implements OnInit {
  Projects: externalProject[]
  Project: externalProject

  constructor(private externalProjectService: ExternalProjectsService, private modalService: NgbModal) { }
  closeResult: string;

  ngOnInit() {
    this.externalProjectService.getExternalProjects().subscribe(
      res => {
        this.Projects = res as externalProject[]
        console.log(res)
      },
      err => {
        console.log(err)
      }
    )
  }

  // Delete project request
  onDelete(id) {
    Swal.fire({
      title: 'Are you sure you want to delete?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.value) {
        this.externalProjectService.deleteExternalProject(id).subscribe(
          res => {
            Swal.fire(
              'Deleted!',
              'Your project has been deleted.',
              'success'
            )
            this.externalProjectService.getExternalProjects().subscribe(
              res => {
                this.Projects = res as externalProject[]
              },
              err => {
                console.log(err)
              }
            )
          },
          err => {
            Swal.fire('Oops...', 'Something went wrong!', 'error')
          }
        )
      }
    })
  }

  // Reply to project request
  open(content, project) {
    this.Project = project
    console.log(this.Project)
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
      return `with: ${reason}`;
    }
  }
}
