import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-external-project',
  templateUrl: './external-project.component.html',
  styleUrls: ['./external-project.component.scss']
})
export class ExternalProjectComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  messageFormControl = new FormControl('',
  Validators.required);
  
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
}
