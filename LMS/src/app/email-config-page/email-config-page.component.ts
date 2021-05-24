import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { SubjectManagerService } from '../Services/subject-manager.service';

@Component({
    selector: 'app-email-config-page',
    templateUrl: './email-config-page.component.html',
    styleUrls: ['./email-config-page.component.css']
})
export class EmailConfigPageComponent implements OnInit {

    constructor(private fb: FormBuilder,
                private subjectManager: SubjectManagerService,
                private router: Router) { }
  public loginForm;

  ngOnInit(): void {
      this.loginForm = this.fb.group({
          userName: ['', Validators.required],
          password: ['', Validators.required]
      });
  }
  formSubmit() {
      var SMTPConfig: any = {};
      var POPConfig: any = {};
      SMTPConfig.host = 'smtp.gmail.com';
      SMTPConfig.port = 587;
      SMTPConfig.username = this.loginForm.controls.userName.value;
      SMTPConfig.password = this.loginForm.controls.password.value;


      POPConfig.host = 'pop.gmail.com';
      POPConfig.port = 995;
      POPConfig.mailStoreType = 'pop3';
      POPConfig.username = this.loginForm.controls.userName.value;
      POPConfig.password = this.loginForm.controls.password.value;

      this.subjectManager.ConfigSMTP(SMTPConfig).subscribe(data => {
          console.log(data);
          this.subjectManager.ConfigPOP(POPConfig).subscribe(dataPOP => {
              console.log(dataPOP);
              this.router.navigate(['/email']);
          });
      });
  }


}
