import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { MatDialogConfig } from '@angular/material';
import {MessageDialogComponent} from '../message-dialog/message-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('mForm') form: any;

  constructor(private messageService: MessageService, public mDialog: MatDialog) { }

  ngOnInit() {
  }

  onSubmit({value, valid}:{value: Message, valid: boolean}) {
    this.messageService.postMessage(value).subscribe(message => {
      console.log("Message Object Created Successfully: ", message);
      this.form.reset();
      this.openDialog();
    });
  }

    openDialog() {
    const dialogRef = this.mDialog.open(MessageDialogComponent, 
    {});
     dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}