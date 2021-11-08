import { SkillDataService, educationInfo, publication } from './../../services/skill-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  educationList: educationInfo[] = [];
  publicationList: publication[] = [];
  techSkills:  Array<String> = [];
  uxSkills:  Array<String> = [];

  constructor(private _skillDataService: SkillDataService) { }

  ngOnInit(): void {
    this.educationList = this._skillDataService.educationBackground;
    this.publicationList = this._skillDataService.publications;
    this.techSkills = this._skillDataService.techSkills;
    this.uxSkills = this._skillDataService.uxSkills;
  }

}
