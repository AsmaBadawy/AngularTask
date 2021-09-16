import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { BookService } from '../book.service';

@Component({
  selector: 'app-addoreditbook',
  templateUrl: './addoreditbook.component.html',
  styleUrls: ['./addoreditbook.component.css']
})
export class AddoreditbookComponent implements OnInit {

  bookForm!: FormGroup;

 bookId: any;
  bookArr: any = [];
  constructor(private _formBuilder: FormBuilder,
    private bookService: BookService,

    private route: Router, private activateRout: ActivatedRoute,
    private snackBar: MatSnackBarComponent) {
    this.bookForm = this._formBuilder.group({
      name: [this.bookArr.name, [Validators.required]],
      category: [this.bookArr.category, [Validators.required]],
      author: [this.bookArr.author, [Validators.required]],
      bookPrice: [this.bookArr.bookPrice, [Validators.required]],
      quantity: [this.bookArr.quantity, [Validators.required]],


    });
  }
  
  ngOnInit(): void {
    this.bookId = this.activateRout.snapshot.paramMap.get('id');
    if (this.bookId != 0) {
      this.bookService.getBookId(this.bookId).subscribe((res: any) => {
        this.bookArr = res
      })
    }
  }
  createOrEditBook() {
    this.bookForm.value.bookPrice = parseFloat(
      Number(this.bookForm.value.bookPrice)
      .toFixed(1)
    );
    this.bookForm.value.quantity = parseInt(this.bookForm.value.quantity);

    if (this.bookId == 0) {

      this.bookService.addBook(this.bookForm.value).subscribe((res: any) => {

        if (res != null) {
          this.snackBar.openSnackBar('sucessfully Added ', 'Close', 'green-snackbar');
          this.route.navigate(['booklist'])
        }
        else {
          this.snackBar.openSnackBar('Falidd Added ', 'Close', 'red-snackbar');

        }

      },(error:HttpErrorResponse) => {
        this.snackBar.openSnackBar("invalid data", 'Close', 'red-snackbar');
      }
      );
    }
    else {
     
      this.bookService.editBook(this.bookId, this.bookForm.value).subscribe((res: any) => {
        this.snackBar.openSnackBar('sucessfully Edited ', 'Close', 'green-snackbar');
        this.route.navigate(['booklist'])

      },(error:HttpErrorResponse) => {
        this.snackBar.openSnackBar("invalid data", 'Close', 'red-snackbar');
      }
      );

    }


  }
  clear() {
    this.bookForm.reset();
  }
}
