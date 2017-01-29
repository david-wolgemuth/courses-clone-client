
import markdown from './markdown';

export class Page {

    id:               string;
    title:            string;
    description:      string;
    content:          string;
    rawContent:       string;

    constructor(page: any) {

        this.id = page.id;
        this.title = page.title;
        this.rawContent = page.content;
        this.content = markdown.makeHtml(page.content);

    }

}
