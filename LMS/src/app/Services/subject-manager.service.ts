import { Injectable } from '@angular/core';
import { ApiManagerService } from './api-manager.service';
import { Location } from '@angular/common';
@Injectable({
    providedIn: 'root'
})
export class SubjectManagerService {

    constructor(private apiManager: ApiManagerService,
                private location: Location) {
    }

    public GetSubjects() {
        return this.apiManager.GetAllSubjects();
    }

    public GetSubject(id) {
        return this.apiManager.GetSubject(id);
    }
    public AddCourse(course) {
        this.apiManager.CreateCourse(course).subscribe((data: any) => {
            console.log(data);
            var contentBlock: any = {};
            contentBlock.type = 'text';
            contentBlock.content = course.content;
            contentBlock.courseId = data.id;

            
            this.apiManager.AddContent(contentBlock).subscribe(data => {
                console.log(data);
            });

            var association: any = {};
            association.subjectId = course.subjectId;
            association.courseId = data.id;

            this.apiManager.SetCourseToSubject(association).subscribe(data => {
                console.log(data);
                this.location.back();
            });
        });
    }
    public CreateSubject(subject) {
        return this.apiManager.CreateSubject(subject); 
    }
    
    
}
