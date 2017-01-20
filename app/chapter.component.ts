
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from './course.service';

import { Chapter } from './chapter';
import { Course } from './course';
import { Page } from './page';

@Component({
    templateUrl: 'app/chapter.component.html'
})
export class ChapterComponent implements OnInit {

    course:     Course;
    chapter:    Chapter;
    pages:      Page[];

    private sub: any;

    constructor(private route: ActivatedRoute, private courseService: CourseService) {

    }
    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params => {
            this.courseService.show(params['course_id'])
            .then(course => {
                this.course = course;
                this.chapter = course.chapters.find(chapter => chapter.id === params['chapter_id']);
                this.pages = this.chapter.pages;
            });
        });
    }

}
