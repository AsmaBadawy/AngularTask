import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  getToken() {
    return localStorage.getItem("token");
  }

  getUserId() {
    let userId = localStorage.getItem("userId");
    if (userId) {
      return parseInt(userId);
    }
    return userId;
  }
  logIn(data: any) {

    return this.http.post(
      `${environment.apiUrl}token`, data
    );
  }

  register(data: any) {
    return this.http.post(
      `${environment.apiUrl}Registration/register`, data
    );
  }
}
