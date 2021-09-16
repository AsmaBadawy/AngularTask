import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { AppRoutingModule } from '../app-routing.module';
import {MatTreeModule} from '@angular/material/tree';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
//component
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog/confirm-dialog.component';
import { MatSnackBarComponent } from './MatSnackBar/mat-snack-bar/mat-snack-bar.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    MatSnackBarComponent,
    ConfirmDialogComponent,
    EditprofileComponent
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
     // * MATERIAL IMPORTS
     MatSidenavModule,
     MatToolbarModule,
     MatMenuModule,
     MatIconModule,
     MatDividerModule,
     MatListModule,
     MatTreeModule,
     MatSnackBarModule,
     FormsModule,
     MatDialogModule,
     MatCardModule,
     MatFormFieldModule,
     MatInputModule,
    
     MatButtonModule,
     
     MatDatepickerModule,
     MatNativeDateModule ,
     
     ReactiveFormsModule 

    
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    MatSnackBarComponent,
    ConfirmDialogComponent,
    EditprofileComponent
  ]
})
export class SharedModule { }
