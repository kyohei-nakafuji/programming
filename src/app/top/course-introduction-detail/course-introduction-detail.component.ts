import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-introduction-detail',
  templateUrl: './course-introduction-detail.component.html',
  styleUrls: ['./course-introduction-detail.component.scss']
})
export class CourseIntroductionDetailComponent implements OnInit {
  @Input() title: string;
  @Input() imagePath: string;
  @Input() content: string;

  constructor() {}

  ngOnInit() {
  }

}
