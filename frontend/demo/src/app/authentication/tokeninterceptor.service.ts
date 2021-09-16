import { Injectable } from '@angular/core';
import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class TokeninterceptorService implements HttpInterceptor{
  constructor(private authService:AuthService) {  }
  intercept(req: HttpRequest<any>, next: HttpHandler)
  {
   let token=this.authService.getToken();

   let requestWithToken: HttpRequest<any> | undefined = undefined;
   if(token)
   {
    requestWithToken=req.clone({
      setHeaders:{
        Authorization:`Bearer ${token}`
      }
    });
   }
    return next.handle(requestWithToken || req)
  }
}
