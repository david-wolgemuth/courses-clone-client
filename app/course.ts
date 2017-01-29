
import { Chapter } from './chapter';
import markdown from './markdown';

export class Course {

    id:               string;
    title:            string;
    rawDescription:   string;
    description:      string;
    chapterIds:       string[];
    chapters:         Chapter[];

    constructor(course: any) {
        this.id = course.id.toString();
        this.title = course.title;
        this.rawDescription = course.description;
        this.description = (course.description);
        this.chapterIds = course.chapter_ids.split(',');
        if (course.chapters) {
            this.chapters = [];
            for (let i = 0; i < course.chapters.length; i++) {
                this.chapters.push(new Chapter(course.chapters[i]));
            }
        }
    }
    
}
