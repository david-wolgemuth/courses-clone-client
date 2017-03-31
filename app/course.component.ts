
import { Component, Input, OnInit, OnDestroy,  } from '@angular/core';

import { CourseService } from './course.service';
import { VisibilityService } from './visiblity.service';

import { Course } from './course';
import { Chapter } from './chapter';

import slideInOut from './slide-in-out.animation';

@Component({
    selector: 'course',
    templateUrl: 'app/course.component.html',
    animations: [ slideInOut ]
})
export class CourseComponent implements OnInit {
    @Input() course:      Course;
    chapters:             Chapter[];
    visible:              boolean;

    constructor(private courseService: CourseService, private visibilityService: VisibilityService) {
        this.visible = false;
    }
    ngOnInit(): void {
        this.visibilityService.on("course", course => {
            if (course !== this.course) {
                this.visible = false; 
            }
        });
    }
    toggle(): void {
        if (this.visible) {
            this.visible = false;
            return;
        }
        this.courseService.course(this.course.id).then(course => {
            this.visible = true;
            this.visibilityService.setVisible(this.course, () => {
                setTimeout(() => {
                    const id = `#${ this.course.id }`;
                    $('html, body').animate({
                        scrollTop: $(id).offset().top - 70
                    }, 300);
                }, 300);
            });
        });
    }
}
