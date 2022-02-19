import { ProjectDigestComponent } from './components/projects/project-digest/project-digest.component';
import { MyLifeComponent } from './components/my-life/my-life.component';
import { SkillsComponent } from './components/skills/skills.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "expereince&skills", component: SkillsComponent},
  { path: "projects", component: ProjectDigestComponent},
  { path: "my-life", component: MyLifeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
