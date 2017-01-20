
import { Chapter } from './chapter';
import markdown from './markdown';

export class Course {

    id:             string;
    title:          string;
    description:    string;
    chapters:       Chapter[];

    constructor(id: string, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = markdown.makeHtml(description);
        this.chapters = [];
    }
    
}
