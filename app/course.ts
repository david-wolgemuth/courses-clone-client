
import { Chapter } from './chapter';

export class Course {

    id:             string;
    title:          string;
    description:    string;
    chapters:       Chapter[];

    constructor(id: string, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.chapters = [];
    }
    
}
