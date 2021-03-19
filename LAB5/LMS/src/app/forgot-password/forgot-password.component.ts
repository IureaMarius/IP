import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private router: Router) { }

  public registerForm;
  ngOnInit(): void {
      this.registerForm = this.fb.group({
          email: ['', Validators.compose([Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
          userName: ['', Validators.required],
          password: ['', Validators.required]
      });
  }
  formSubmit() {
      console.log("Creating account.");
      this.router.navigate(['/']);
  }

}
