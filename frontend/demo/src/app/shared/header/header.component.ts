import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/auth.service';
import { UserService } from 'src/app/shared/profile/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private router:Router,private authService:AuthService,public userService:UserService) { }
userId:any;
  ngOnInit(): void {
  this.userId=this.authService.getUserId();
  this.userService.getUserById(this.userId)
  }
  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
  profile()
  {
  this.router.navigate(['editprofile', this.userId]);
    
  }
  logout()
  {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    this.router.navigate(['/login']);

  }
}
