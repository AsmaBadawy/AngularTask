import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.css']
})
export class PublicLayoutComponent implements OnInit {

  sideBarOpen = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

}
