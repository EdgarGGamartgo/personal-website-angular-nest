import { Component, OnInit } from '@angular/core';
import { CV_PATH } from '../constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async downloadCV() {
    window.open(CV_PATH);
  }

}
