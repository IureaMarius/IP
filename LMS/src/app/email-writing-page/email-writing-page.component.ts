import { Component, OnInit } from '@angular/core';
import { SubjectManagerService } from '../Services/subject-manager.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-email-writing-page',
    templateUrl: './email-writing-page.component.html',
    styleUrls: ['./email-writing-page.component.css']
})
export class EmailWritingPageComponent implements OnInit {

    constructor(private subjectManager: SubjectManagerService,
                private fb: FormBuilder) { }

    public selectedEmail;                
    public sendEmailForm;
    ngOnInit(): void {
        this.selectedEmail = this.subjectManager.selectedEmail;
        this.sendEmailForm = this.fb.group({
            to: ['', Validators.required],
            subject: ['', Validators.required],
            content: ['', Validators.required],
        });
        if(this.selectedEmail.subject) {
            this.sendEmailForm = this.fb.group({
                to: [this.selectedEmail.from, Validators.required],
                subject: ['[RE] ' + this.selectedEmail.subject, Validators.required],
                content: ['', Validators.required],
            });
        }
    }
    public SendEmail() {
        var email: any = {};
        email.from = this.selectedEmail.to;
        email.to = this.sendEmailForm.controls.to.value;
        email.subject = this.sendEmailForm.controls.subject.value;
        email.content = this.sendEmailForm.controls.content.value;
        this.subjectManager.SendTextEmail(email).subscribe(data => {
            console.log(data);
            window.history.back();
        });
    }


}
