
import markdown from './markdown';
import { Page } from './page';

export class Chapter {

    id:            string;
    title:         string;
    description:   string;
    pages:         Page[];

    constructor(id: string, title: string, description: string) {

        this.id = id;
        this.title = title;
        this.description = markdown.makeHtml(description);
        this.pages = [];

    }

}
