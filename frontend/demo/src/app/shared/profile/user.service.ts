import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { MatSnackBarComponent } from '../MatSnackBar/mat-snack-bar/mat-snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: any = undefined;
  constructor(private http: HttpClient,
    private route: Router,
    private snackBar: MatSnackBarComponent) { }


  getUserById(id: number) {
    this.http.get(
      `${environment.apiUrl}UsersInfo/${id}`
    ).subscribe(res => {
      this.currentUser = res;

    });

  }
  editUser(data: any) {
    let updatedUser = { ...data, userId: +this.currentUser.userId, password: this.currentUser.password }
    this.http.put(
      `${environment.apiUrl}UsersInfo/${this.currentUser.userId}`, updatedUser
    ).subscribe(res => {
      this.currentUser = res;
      this.snackBar.openSnackBar('sucessfully Edited ', 'Close', 'green-snackbar');
      this.route.navigate(['booklist'])
    },(error:HttpErrorResponse) => {
      this.snackBar.openSnackBar("invalid data", 'Close', 'red-snackbar');
    }
    )
  }
}
