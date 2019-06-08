import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, NgForm } from '@angular/forms';
import { ExternalProjectsService } from '../shared/external-projects/external-projects.service';
import { externalProject } from '../shared/external-projects/external-projects.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-external-project',
  templateUrl: './external-project.component.html',
  styleUrls: ['./external-project.component.scss']
})
export class ExternalProjectComponent implements OnInit {
  externalProject : externalProject;

  constructor(private externalprojectservice: ExternalProjectsService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
    this.externalprojectservice.postExternalProject(form.value).subscribe(
      res => {
        Swal.fire(
          'Submitted Succesfully!',
          'ECG will review your project request and contact you soon.',
          'success'
        );
        form.resetForm();
      },
      err => {
        Swal.fire('Oops...',
        'Something went wrong!',
        'error'
        )
      }
    )
  }
}
