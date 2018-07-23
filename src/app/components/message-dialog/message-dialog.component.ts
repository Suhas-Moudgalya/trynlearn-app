import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialog) { }

  ngOnInit() {
  }

}
