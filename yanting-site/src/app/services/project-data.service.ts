import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

export interface Project {
  id: Number,
  title: String,
  timeFrame: String,
  catergory: String,
  overview: String,
  description?: String,
  pictures?: Array<{name: String, link: String, des?: String}>,
  researchQuestion?: String,
  results?: Array<String>,
  method?: String,
  outcome?: String
}

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  private projectDataUrl: string = "assets/json/projects.json";

  constructor(private http: HttpClient) { }

  getProjectData(): Observable<Project[]> {
    return this.http.get<Project[]>(this.projectDataUrl).pipe(
      tap((data: Project[]) => console.log(data))
    )
  }
}
