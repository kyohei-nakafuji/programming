import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopDescriptionComponent } from './top-description.component';

describe('TopDescriptionComponent', () => {
  let component: TopDescriptionComponent;
  let fixture: ComponentFixture<TopDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
