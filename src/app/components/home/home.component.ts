import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  messageCount: Number;

  constructor() { }

  ngOnInit() {
  }

  updateMessageCount(e){
    this.messageCount = e;
  }

}
