
import { Injectable } from '@angular/core';
import { Course } from './course';
import { Chapter } from './chapter';
import { Page } from './page';

@Injectable()
export class CourseService {
    courses: Course[] = [];
    constructor() {
        const titles = ['Web Fundamentals', 'iOS', 'Ruby on Rails', 'C#', 'MEAN', 'Python', 'LAMP']
        titles.forEach((title, id) => {
            this.courses.push(new Course(id.toString(), title, 'It\'s a **course**.'));
        });
        const c = new Chapter('0', 'Awesome Chapter Title', 'This is *just* a chapter');
        ['Page1', 'Page2', 'Page3'].forEach((title, id) => {
            c.pages.push(new Page(id.toString(), title, 'A *page* or a **PAGE**', '# Content\n\n### Sub Header\n\nParagraph 1\n\nParagraph2'));
        });
        this.courses[0].chapters.push(c);
    }
    index(): Promise<Course[]> {
        return Promise.resolve(this.courses);
    }
    show(id: string): Promise<Course> {
        return Promise.resolve(this.courses[id]);
    }
}
