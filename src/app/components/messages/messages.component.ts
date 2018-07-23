import { Component, OnInit } from '@angular/core';
import{ MessageService } from '../../services/message.service';
import { Message } from '../../models/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messageObject:Message[];
  constructor(private messageService : MessageService) { }

  ngOnInit() {
    this.messageService.getMessage().subscribe(message => {
      this.messageObject = message;
  });
  }
}
