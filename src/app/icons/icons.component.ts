import { Component, OnInit ,Inject} from '@angular/core';
import {UserService} from '../../app/shared/user/user.service'
import {user} from '../../app/shared/user/user.model'
import {NgForm} from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.css']
})
export class IconsComponent implements OnInit {
  Users:user[]
  User:user

  constructor(private userservice :UserService,private modalService: NgbModal ) { }
  closeResult: string;

 ngOnInit() {
    this.userservice.getusers().subscribe(
      res=>{
        this.Users =res as user[]
       console.log(res)
          
       
      },
      err =>{
        console.log(err)
      }
    )
  }

  onUpdate(form:NgForm){
    this.userservice.updateUser(form.value).subscribe(
      res=>{
        Swal.fire(
          'Updated Succesfully',
          'success'
        )
        this.userservice.getusers().subscribe(
          res=>{
            this.Users =res as user[]  
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
        this.userservice.deleteUser(id).subscribe(
          res=>{
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
            this.userservice.getusers().subscribe(
              res=>{
                this.Users =res as user[]  
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
    this.User=project
    console.log(this.User)
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










  






 





