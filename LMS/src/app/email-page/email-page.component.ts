import { Component, OnInit } from '@angular/core';
import {EmailUser} from '../email';
import {USEREMAILS} from '../mock-emails';

@Component({
  selector: 'app-email-page',
  templateUrl: './email-page.component.html',
  styleUrls: ['./email-page.component.css']
})
export class EmailPageComponent implements OnInit {


  emails = USEREMAILS;
  selectedEmail?: EmailUser;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(emailuser: EmailUser): void {
    this.selectedEmail = emailuser;
  }

}
