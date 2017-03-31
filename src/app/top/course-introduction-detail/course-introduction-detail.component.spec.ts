import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseIntroductionDetailComponent } from './course-introduction-detail.component';

describe('CourseIntroductionDetailComponent', () => {
  let component: CourseIntroductionDetailComponent;
  let fixture: ComponentFixture<CourseIntroductionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseIntroductionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseIntroductionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
