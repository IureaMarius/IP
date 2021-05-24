import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectManagerService } from '../Services/subject-manager.service';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

    constructor(private fb: FormBuilder,
                private subjectManager: SubjectManagerService,
                private router: Router) { }
  
    public registerForm;
    ngOnInit(): void {
        this.registerForm = this.fb.group({
            email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
            userName: ['', [Validators.required, Validators.minLength(6)]],
            password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]]
        });
    }
    formSubmit() {
        var creds: any = {};
        creds.login = this.registerForm.controls.userName.value;
        creds.password = this.registerForm.controls.password.value;
        this.subjectManager.Register(creds).subscribe(data => {
            console.log(data);
            this.router.navigate(['/']);
        });
    }

}
