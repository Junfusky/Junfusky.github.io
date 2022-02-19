import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDigestComponent } from './project-digest.component';

describe('ProjectDigestComponent', () => {
  let component: ProjectDigestComponent;
  let fixture: ComponentFixture<ProjectDigestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectDigestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDigestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
