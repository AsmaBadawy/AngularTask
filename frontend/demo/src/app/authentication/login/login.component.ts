import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  
  constructor(private _formBuilder: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBarComponent,
    private router: Router) {
    this.loginform = this._formBuilder.group({
      UserName: ['', [Validators.required]],
      Password: ['', [Validators.required]],

    });
  }

  ngOnInit(): void {
   let token= this.authService.getToken();
   if(token)
   {
     this.router.navigate(['booklist']);
   }
  }
  login() {
    this.authService.logIn(this.loginform.value)
      .subscribe((res: any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('userId', res.userId);
        this.router.navigate(['booklist'])
        if (res.token) {
          this.snackBar.openSnackBar('Welcome', '', 'green-snackbar');
        }
      },(error:HttpErrorResponse) => {
        console.log(error.error);
        this.snackBar.openSnackBar(error.error, 'Close', 'red-snackbar');
      }
      );
     
  }
}
