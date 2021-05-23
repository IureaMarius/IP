import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { SubjectManagerService } from '../Services/subject-manager.service';
import { Location } from '@angular/common';

@Component({
    selector: 'app-subject-adder',
    templateUrl: './subject-adder.component.html',
    styleUrls: ['./subject-adder.component.css']
})
export class SubjectAdderComponent implements OnInit {

    constructor(private subjectManager: SubjectManagerService,
                private fb: FormBuilder,
                private location: Location,
                private route: ActivatedRoute) { }
  
    private subjectId;
    public newCourseForm;
    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.subjectId = params.get('id'); 
        });
        this.newCourseForm = this.fb.group({
            name: ['', Validators.required],
            title: ['', Validators.required],
            content: ['', Validators.required],
        });
    }
    public AddCourse() {
        var course = {
            name: this.newCourseForm.value.name,
            title: this.newCourseForm.value.title,
            content: this.newCourseForm.value.content,
            subjectId: this.subjectId
        };
        this.subjectManager.AddCourse(course);
    }

}
