
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';

@Component({
    templateUrl: 'app/courses-index.component.html'
})
export class CoursesIndexComponent implements OnInit {
    courses: Course[];
    constructor(private courseService: CourseService) {

    }
    ngOnInit(): void {
        this.courseService.index()
        .then(courses => {
            this.courses = courses; 
        })
    }
    goToCourse(course: Course): void {
        console.log(course);
    }
}
