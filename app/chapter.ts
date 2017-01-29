
import markdown from './markdown';
import { Page } from './page';

export class Chapter {

    id:               string;
    title:            string;
    rawDescription:   string;
    description:      string;
    pageIds:          string[];
    pages:            Page[];

    constructor(chapter: any) {

        this.id = chapter.id;
        this.title = chapter.title;
        this.rawDescription = chapter.description;
        this.description = markdown.makeHtml(chapter.description);
        this.pageIds = chapter.page_ids;
        if (chapter.pages) {
            this.pages = []
            chapter.pages.forEach((page:any) => {
                this.pages.push(new Page(page));
            });
        }
        
    }

}
