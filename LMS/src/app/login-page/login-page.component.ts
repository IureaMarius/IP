import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectManagerService } from '../Services/subject-manager.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    constructor(private fb: FormBuilder,
                private subjectManager: SubjectManagerService,
                private router: Router) { }
    public loginForm;                                                  
    public errorMessage;

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    formSubmit() {
        var creds: any = {};
        creds.login = this.loginForm.controls.userName.value;
        creds.password = this.loginForm.controls.password.value;
        this.subjectManager.Login(creds).subscribe((data) => {
            console.log(data);
            this.router.navigate(['/subjects']);
        },
        (err) => {
            console.log(err);
            this.errorMessage = 'Login Failed!';
        });
    }

}
