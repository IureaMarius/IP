import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-email-config-page',
    templateUrl: './email-config-page.component.html',
    styleUrls: ['./email-config-page.component.css']
})
export class EmailConfigPageComponent implements OnInit {

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
      this.router.navigate(['/email']);
  }


}
