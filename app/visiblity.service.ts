
import { Injectable } from '@angular/core';

import { Course } from './course';
import { Chapter } from './chapter';
import { Page } from './page';

@Injectable()
export class VisibilityService {
    course:   Course;
    chapter:  Chapter;
    page:     Page;

    courseSetCallbacks:  ((course: Course) => void)[] = []
    chapterSetCallbacks: ((chapter: Chapter) => void)[] = []
    pageSetCallbacks:    ((page: Page) => void)[] = []

    setVisible(object: Course|Chapter|Page, finished: () => ()) {
        if (object instanceof Course) {
            this.course = object;
            this.courseSetCallbacks.forEach(cb => {
                cb(object);
            });
            finished();
        }
        if (object instanceof Chapter) {
            this.chapter = object;
            this.chapterSetCallbacks.forEach(cb => {
                cb(object);
            });
            finished();
        }
        if (object instanceof Page) {
            this.page = object;
            this.pageSetCallbacks.forEach(cb => {
                cb(object);
            });
            finished();
        }
    }

    on(type: string, changed: (obj: Course|Chapter|Page) => void) {
        if (type === "course") {
            this.courseSetCallbacks.push(changed);
        }
        if (type === "chapter") {
            this.chapterSetCallbacks.push(changed);
        }
        if (type === "page") {
            this.pageSetCallbacks.push(changed);
        }
    }

}

