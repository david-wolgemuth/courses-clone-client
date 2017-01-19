
import { Injectable } from '@angular/core';
import { Course } from './course';
import { Chapter } from './chapter';

const COURSES: Course[] = []
const titles = ['Web Fundamentals', 'iOS', 'Ruby on Rails', 'C#', 'MEAN', 'Python', 'LAMP']
titles.forEach((title, id) => {
    COURSES.push(new Course(id.toString(), title, 'It\'s a course.'));
})
COURSES[0].chapters.push(new Chapter(0, 'Chapter Title', 'This is just a chapter'));

@Injectable()
export class CourseService {
    index(): Promise<Course[]> {
        return Promise.resolve(COURSES);
    }
    show(id): Promise<Course> {
        return Promise.resolve(COURSES[id]);
    }
}
