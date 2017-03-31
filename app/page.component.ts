
import { Component, OnInit, Input, ElementRef  } from '@angular/core';

import { CourseService } from './course.service';
import { VisibilityService } from './visiblity.service';

import { Course } from './course';
import { Chapter } from './chapter';
import { Page } from './page';

import slideInOut from './slide-in-out.animation';

declare var $:JQueryStatic;

@Component({
    selector: 'page',
    templateUrl: 'app/page.component.html',
    animations: [ slideInOut ]
})
export class PageComponent {

    @Input() course:      Course;
    @Input() chapter:     Chapter;
    @Input() page:        Page;
    visible:              boolean;

    constructor(private courseService: CourseService, private visibilityService: VisibilityService) {
        this.visible = false;
    }
    ngOnInit(): void {
        this.visibilityService.on("page", page => {
            if (page !== this.page) {
                this.visible = false; 
            }
        });
    }
    toggle(): void {
        this.visible = !this.visible;
        if (this.visible) {
            this.visibilityService.setVisible(this.page, () => {
                setTimeout(() => {
                    const id = `#${ this.course.id }-${ this.chapter.id }-${ this.page.id }`;
                    $('html, body').animate({
                        scrollTop: $(id).offset().top - 70
                    }, 300);
                }, 300);
            });
        }
    }

}
