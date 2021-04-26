import { Component, Input, OnInit } from '@angular/core';
import { EmailUser } from '../email';

@Component({
  selector: 'app-email-page-item',
  templateUrl: './email-page-item.component.html',
  styleUrls: ['./email-page-item.component.css']
})
export class EmailPageItemComponent implements OnInit {

  @Input() email?: EmailUser;
  constructor() { }

  ngOnInit(): void {
  }

}
