import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  templateUrl: './menu-icon.component.html',
  styleUrls: ['./menu-icon.component.scss']
})
export class MenuIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    document.getElementById("mySidebar")!.style.width = "60%";
    document.getElementById("mySidebar")!.style.display = "block";
  }

}
