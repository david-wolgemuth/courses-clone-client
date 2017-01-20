
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from './course.service';

import { Course } from './course';
import { Chapter } from './chapter';

@Component({
    templateUrl: 'app/course.component.html'
})
export class CourseComponent implements OnInit {
    course:      Course;
    chapters:    Chapter[];

    private sub: any;

    constructor(private courseService: CourseService, private route: ActivatedRoute) {

    }
    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.courseService.show(params['id'])
            .then(course => {
                this.course = course;
                this.chapters = course.chapters;
            });
        });
    }
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
