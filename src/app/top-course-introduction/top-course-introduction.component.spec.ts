import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCourseIntroductionComponent } from './top-course-introduction.component';

describe('TopCourseIntroductionComponent', () => {
  let component: TopCourseIntroductionComponent;
  let fixture: ComponentFixture<TopCourseIntroductionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCourseIntroductionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCourseIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
