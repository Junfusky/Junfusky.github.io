import { Component, OnInit } from '@angular/core';
import {
  ProjectDataService,
  Project,
} from 'src/app/services/project-data.service';

@Component({
  selector: 'app-project-digest',
  templateUrl: './project-digest.component.html',
  styleUrls: ['./project-digest.component.scss'],
})
export class ProjectDigestComponent implements OnInit {
  projectList: [] = [];
  projects: Project[] = [];

  // for pagination
  pageLength: number = 0;
  pageSize: number = 10;
  pageSizeOptions = [5, 10, 25, 50];
  pageIndex: number = 0;

  constructor(private _projectDataService: ProjectDataService) {}

  ngOnInit(): void {
    this._projectDataService.getProjectData().subscribe((data: Project[]) => {
      this.projects = data;
      this.pageLength = data.length;
    });
  }
  onPageChange(e: any) {
    console.log(e);
  }
}
