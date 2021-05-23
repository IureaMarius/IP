import { Component, OnInit } from '@angular/core';
import { SubjectManagerService } from '../Services/subject-manager.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-learning-page',
    templateUrl: './learning-page.component.html',
    styleUrls: ['./learning-page.component.css']
})
export class LearningPageComponent implements OnInit {

    constructor(private subjectManager: SubjectManagerService,
                private fb: FormBuilder,
                private router: Router) { }

                
    public subjects;
    public addSubjectForm;
    ngOnInit(): void {
        this.subjectManager.GetSubjects().subscribe(data => {
            console.log(data);
            this.subjects = data;
        });
        this.addSubjectForm = this.fb.group({
            name: ['', Validators.required]
        });
    }
    public AddSubject() {
        var subj: any = {};
        subj.name = this.addSubjectForm.value.name;
        this.subjectManager.CreateSubject(subj).subscribe(data => {
            console.log(data);
            window.location.reload();
        });

    }
    public GoToSubjectPage(subjectId) {
        this.router.navigate(['/subject/' + subjectId]);
    }

}
