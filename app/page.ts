
import markdown from './markdown';

export class Page {

    id:               string;
    title:            string;
    description:      string;
    content:          string;

    constructor(id: string, title: string, description: string, content: string) {

        this.id = id;
        this.title = title;
        this.description = markdown.makeHtml(description);
        this.content = markdown.makeHtml(content);

    }

}
