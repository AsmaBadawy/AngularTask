import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './authentication/authGuard.guard';
import { LoginComponent } from './authentication/login/login.component';
import { RegistrationComponent } from './authentication/registration/registration.component';
import { AddoreditbookComponent } from './book/addoreditbook/addoreditbook.component';
import { ListofbookComponent } from './book/listofbook/listofbook.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditprofileComponent } from './shared/profile/editprofile/editprofile.component';
import { AuthLayoutComponent } from './_layouts/auth-layout/auth-layout.component';
import { PublicLayoutComponent } from './_layouts/public-layout/public-layout.component';

const routes: Routes = [

  {path:'',component:AuthLayoutComponent,
  children:
  [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {path:'login',component:LoginComponent},
  {path:'registration',component:RegistrationComponent},

  ]
},
{path:'',component:PublicLayoutComponent,canActivate:[authGuard],
  children:
  [
    { path: '', redirectTo: 'booklist', pathMatch: 'full' },
        //book
    { path: 'booklist', component: ListofbookComponent },
    { path: 'addOrEditbook/:id', component: AddoreditbookComponent },
    { path: 'editprofile/:id', component: EditprofileComponent },

  ]
},



{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
