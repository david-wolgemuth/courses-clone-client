
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from './course.service';

import { Course } from './course';
import { Chapter } from './chapter';
import { Page } from './page';

@Component({
    templateUrl: 'app/page.component.html'    
})
export class PageComponent {

    course:      Course;
    chapter:     Chapter;
    page:        Page;

    private sub: any;

    constructor(private route: ActivatedRoute, private courseService: CourseService) {

    }
    ngOnInit(): void {
        this.sub = this.route.params.subscribe((params:any) => {
            this.courseService.show(params['course_id'])
            .then((course:Course) => {
                this.course = course;
                this.chapter = course.chapters.find((chapter:Chapter) => chapter.id === params['chapter_id']);
                this.page = this.chapter.pages.find(page => page.id === params['page_id']);
            });
        });
    }

}
