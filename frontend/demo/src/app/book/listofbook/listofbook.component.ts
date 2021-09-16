import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatSnackBarComponent } from 'src/app/shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { MatTableDataSource } from '@angular/material/table';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog/confirm-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { book } from '../book.model';
import { BookService } from '../book.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-listofbook',
  templateUrl: './listofbook.component.html',
  styleUrls: ['./listofbook.component.css']
})
export class ListofbookComponent implements OnInit {
  dataSource!: MatTableDataSource<book>;
  books: book[]=[];
  colums: string[] = ["bookId","name", "category","author","actions"];
  @ViewChild(MatSort, { static: true })
  sort!: MatSort;
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  constructor(private bookService:BookService, 
    private router: Router,
    private snackBar: MatSnackBarComponent, private dialog: MatDialog) {
  
  }

  ngOnInit(): void {
    this.getListOfBooks();
 
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getListOfBooks() {
    this.bookService.getBook().subscribe((res: any) => {
      this.books = res;
    this.dataSource = new MatTableDataSource(this.books);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    },(error:HttpErrorResponse) => {
      this.snackBar.openSnackBar("invalid data", 'Close', 'red-snackbar');
    }
    );
  }
  addOrEditBook(id:number)
 {
  this.router.navigate(['/addOrEditbook', id]);

   
 }
  delete(element:any)
  {
  
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Remove Book',
        message: 'Are you sure, you want to remove an Book: ' + element.name
      }
    });
    confirmDialog.afterClosed().subscribe(result => {
      if (result === true) {
        this.bookService.deleteBook(element.bookId).subscribe((res: any) => {
          this.snackBar.openSnackBar('sucessfully Deleted ','Close','green-snackbar');
          this.getListOfBooks();
        });
      }
    });  

  }


}


