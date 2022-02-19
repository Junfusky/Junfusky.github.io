import { SharedModule } from './../../shared/shared.module';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDigestComponent } from './project-digest/project-digest.component';

const routes: Routes = [
  { path: 'projects-detail/:title', component: ProjectDetailComponent },
  { path: '', redirectTo: 'projects', pathMatch: 'full' },
];

@NgModule({
  declarations: [ProjectDigestComponent, ProjectDetailComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class ProjectsModule {}
