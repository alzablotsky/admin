import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public url = "http://localhost:8080/login.html";

  constructor() { }

  ngOnInit() { }

  public logout () {
   window.location.assign(this.url);
      
  }

  

}
