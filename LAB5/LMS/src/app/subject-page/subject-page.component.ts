import { Component, OnInit } from '@angular/core';
import { SubjectManagerService } from '../Services/subject-manager.service';

@Component({
  selector: 'app-subject-page',
  templateUrl: './subject-page.component.html',
  styleUrls: ['./subject-page.component.css']
})
export class SubjectPageComponent implements OnInit {

  constructor(private subjectManager: SubjectManagerService) { }

  public Title;
  public materials;
  public selectedMaterial;
  public selectedMaterialIndex;

  ngOnInit(): void {
      this.subjectManager.CurrentSubject.subscribe(data => {
          this.Title = data; 
      });
      this.subjectManager.Materials.subscribe(data => {
          this.materials = data;
      });
  }
  public SelectMaterial(i) {
      this.selectedMaterialIndex = i;
      this.selectedMaterial = this.materials[i];
  }

}
