import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { AddoreditbookComponent } from './book/addoreditbook/addoreditbook.component';
import { ListofbookComponent } from './book/listofbook/listofbook.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { AuthLayoutComponent } from './_layouts/auth-layout/auth-layout.component';
import { PublicLayoutComponent } from './_layouts/public-layout/public-layout.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarComponent } from './shared/MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import { TokeninterceptorService } from './authentication/tokeninterceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListofbookComponent,
    AddoreditbookComponent,
    PageNotFoundComponent,
    RegistrationComponent,
    AuthLayoutComponent,
    PublicLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //angular material
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    FormsModule,
    ReactiveFormsModule ,
    CommonModule,
    RouterModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    //shared module
     SharedModule,
    
    //flex layout
    FlexLayoutModule,
   // * MATERIAL IMPORTS
   MatSidenavModule,

   MatPaginatorModule,


   MatIconModule,
   MatTableModule,

   MatSortModule
  ],
  providers: [
    MatSnackBarComponent,
      {
      provide:HTTP_INTERCEPTORS,
      useClass:TokeninterceptorService,
      multi:true
      }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
