import { Component, OnInit } from '@angular/core';
import { SubjectManagerService } from '../Services/subject-manager.service';
import { Router } from '@angular/router';
@Component({
    selector: 'app-email-page',
    templateUrl: './email-page.component.html',
    styleUrls: ['./email-page.component.css']
})
export class EmailPageComponent implements OnInit {


    public emails;
    public selectedEmail;
  
    constructor(private subjectManager: SubjectManagerService,
                private router: Router) {
    }
  
    ngOnInit(): void {
        this.subjectManager.GetAllEmails().subscribe(data => {
            console.log(data);
            this.emails = data;
        });
    }
    public onSelect(email): void {
        this.selectedEmail = email;
    }
    public ReplyEmail() {
        this.subjectManager.selectedEmail = this.selectedEmail;
        this.router.navigate(['/emailWrite/']);
    }
    public ComposeEmail() {
        this.subjectManager.selectedEmail = null;
        this.router.navigate(['/emailWrite/']);
    }


}
