import { Component, OnInit } from '@angular/core';
import { SubjectManagerService } from '../Services/subject-manager.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-subject-page',
    templateUrl: './subject-page.component.html',
    styleUrls: ['./subject-page.component.css']
})
export class SubjectPageComponent implements OnInit {

    constructor(private subjectManager: SubjectManagerService,
                private route: ActivatedRoute) { }
  
    public Title;
    public courses;
    public selectedCourse;
    public selectedCourseIndex;
    public id;
  
    ngOnInit(): void {
        this.route.paramMap.subscribe(params => {
            this.id = params.get('id'); 
            this.subjectManager.GetSubject(this.id).subscribe((data: any) => {
                console.log(data);
                this.Title = data.name;
                this.courses = data.subjectCourses;
                this.selectedCourse = this.courses[0];
                this.selectedCourseIndex = 0;
                
            });
        });

    }
    public SelectCourse(index) {
        this.selectedCourse = this.courses[index];
        this.selectedCourseIndex = index;
    }
  
}
