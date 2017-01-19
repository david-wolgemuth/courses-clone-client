
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Course } from './course';
import { CourseService } from './course.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'app/course.component.html'
})
export class CourseComponent implements OnInit {
    course: Course;
    private sub: any;
    constructor(private courseService: CourseService, private route: ActivatedRoute) {

    }
    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.courseService.show(params['id'])
            .then(course => {
                this.course = course;
                console.log(this.course);
            });
        });
    }
    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }
}
