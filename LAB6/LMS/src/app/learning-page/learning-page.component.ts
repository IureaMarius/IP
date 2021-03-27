import { Component, OnInit } from '@angular/core';
import { SubjectManagerService } from '../Services/subject-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learning-page',
  templateUrl: './learning-page.component.html',
  styleUrls: ['./learning-page.component.css']
})
export class LearningPageComponent implements OnInit {

  constructor(private subjectManager: SubjectManagerService,
              private router: Router) { }

  public subjects;
  ngOnInit(): void {
      //probably will have IDs here
      this.subjects = [
          { name: "Advanced Programming"},
          { name: "English IV"},
          { name: "Embedded Engineering"},
          { name: "Programming Engineering"},
          { name: "Compilers"},
          { name: "Introduction into programming"}
      ];
  }
  public GoToSubjectPage(subject) {
      this.subjectManager.SetCurrentSubject(subject);
      this.router.navigate(['/subject']);

  }

}
