
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CourseService } from './course.service';
import { VisibilityService } from './visiblity.service';

import { Chapter } from './chapter';
import { Course } from './course';
import { Page } from './page';

import slideInOut from './slide-in-out.animation';

@Component({
    selector: 'chapter',
    templateUrl: 'app/chapter.component.html',
    animations: [ slideInOut ]
})
export class ChapterComponent implements OnInit {

    @Input() course:     Course;
    @Input() chapter:    Chapter;
    visible: boolean

    constructor(private courseService: CourseService, private visibilityService: VisibilityService) {
        this.visible = false;
    }
    ngOnInit(): void {
        this.visibilityService.on("chapter", chapter => {
            if (chapter !== this.chapter) {
                this.visible = false; 
            }
        });
    }
    toggle(): void {
        if (this.visible) {
            this.visible = false;
            return;
        }
        this.courseService.chapter(this.course.id, this.chapter.id).then(chapter => {
            this.visible = true;
            this.visibilityService.setVisible(this.chapter, () => {
                setTimeout(() => {
                    const id = `#${ this.course.id }-${ this.chapter.id }`;
                    $('html, body').animate({
                        scrollTop: $(id).offset().top - 70;
                    }, 300);
                }, 600);
            });
        });
    }
}
