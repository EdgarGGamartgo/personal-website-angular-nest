import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburguer-sidebar',
  templateUrl: './hamburguer-sidebar.component.html',
  styleUrls: ['./hamburguer-sidebar.component.scss']
})
export class HamburguerSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeNav() {
    document.getElementById("mySidebar")!.style.display = "none";
  }

}
