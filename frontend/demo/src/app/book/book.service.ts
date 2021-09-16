import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }
  getBook()
  {
    return this.http.get(
      `${environment.apiUrl}books`
    );
  }
  getBookId(Id:number)
  {
    return this.http.get(
      `${environment.apiUrl}books/${Id}`
    );
  }
  addBook(data:any)
  {
    return this.http.post(
      `${environment.apiUrl}books`, data
    );
  }

  editBook(id:number,data:any)
  {
    return this.http.put(
      `${environment.apiUrl}books/${id}`,{ ...data, bookId: +id }
    );
  }
  deleteBook(Id:Number)
  {
    return this.http.delete(
      `${environment.apiUrl}books/${Id}`
    );
  }
}