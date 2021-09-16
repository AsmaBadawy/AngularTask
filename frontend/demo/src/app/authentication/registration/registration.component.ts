import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBarComponent } from '../../shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  Registrationform: FormGroup;
  constructor(private _formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBarComponent,
    private router: Router) {
    this.Registrationform = this._formBuilder.group({
      FirstName: ['', [Validators.required]],
      LastName : ['', [Validators.required]],
      UserName: ['', [Validators.required]],
      Password: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }
  Registration()
  {
this.authService.register(this.Registrationform.value)
  .subscribe((res: any) => {
    this.router.navigate(['login'])
    if (res) {
      this.snackBar.openSnackBar('register successfully', '', 'green-snackbar');

    }
    else {
      this.snackBar.openSnackBar('register faild', 'Close', 'red-snackbar');

    }
  },(error:HttpErrorResponse) => {
    this.snackBar.openSnackBar("invalid data", 'Close', 'red-snackbar');
  }
  )
  }
}
