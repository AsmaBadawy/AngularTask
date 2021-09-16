import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
import { MatSnackBarComponent } from '../../MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  userId:any;
  user:any=[];
userForm:FormGroup;
  constructor(private authService:AuthService,public userService:UserService,
    private snackBar: MatSnackBarComponent,
    private route: Router,
    private _formBuilder:FormBuilder) { 
    this.userForm = this._formBuilder.group({
      userId:[this.userService?.currentUser?.userId],
      firstName: [this.userService.currentUser.firstName, [Validators.required]],
      lastName: [this.userService.currentUser.lastName, [Validators.required]],
      userName: [this.userService.currentUser.userName, [Validators.required]],
      date: [this.userService.currentUser.date, [Validators.required]],


    });
  }

  ngOnInit(): void {
    this.userId=this.authService.getUserId();
  
    this.userService.getUserById(this.userId)
  }
  saveChanges()
  {
    this.userService.editUser(this.userForm.value)
  }
}
