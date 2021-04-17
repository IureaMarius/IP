import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

    constructor(private fb: FormBuilder,
                private router: Router) { }
    public loginForm;

    ngOnInit(): void {
        this.loginForm = this.fb.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    formSubmit() {
        console.log('checking credentials, Logged in!');
        this.router.navigate(['/subjects']);
    }

}
