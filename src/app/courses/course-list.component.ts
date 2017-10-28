import {Component, OnInit} from '@angular/core';
import {Course} from './course';
import {FilterService} from '../blocks/filter-text/filter-text.service';
import {CourseService} from './course.service';

@Component({
  selector: 'lyxor-course-list',
  templateUrl: 'course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})

export class CourseListComponent implements OnInit {

  courses: Course[];
  filteredCourses = this.courses;

  constructor(private _courseService: CourseService, private _filterService: FilterService) {
  }

  filterChanged(searchText: string) {
    console.log('user searched: ', searchText);
    this.filteredCourses = this._filterService.filter(searchText, ['id', 'name', 'topic'], this.courses);
  }

  getCourses() {
    this._courseService.getCourses()
      .subscribe(courses => {
        this.courses = this.filteredCourses = courses.data;
      });
  }

  ngOnInit() {
    this.getCourses();
  }
}
