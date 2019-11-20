import { UserService } from '../../shared/user.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [UserService]
})
export class SignUpComponent implements OnInit {

  emailRegex= '';
  showSuccessMessage: boolean;
  serverErrorMessage: string;

  constructor(private userService: UserService) {


   }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    return this.userService.postUser(form.value).subscribe(
      res => { this.showSuccessMessage = true;
      setTimeout(() =>this.showSuccessMessage = false, 5000 );
      this.resetForm(form);
      },
      err => { if(err.status === 422){ this.serverErrorMessage = err.error.join('<br/>'); }
    else this.serverErrorMessage = 'Somthing went wrong . please contact admin';
   }
    ); 
  }

  resetForm(form:NgForm){
    this.userService.selectedUser = {
      fullName: '',
      email: '',
      password: ''
    };
    form.resetForm();
    this.serverErrorMessage = '';
  }

}
