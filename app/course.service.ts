
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import './rxjs-operators';

import { Course } from './course';
import { Chapter } from './chapter';
import { Page } from './page';
import { User } from './user';

import markdown from './markdown';

@Injectable()
export class CourseService {

    private _url = 'http://localhost:3000';
    private _courses: Course[] = [];
    private _user: User = null;
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options: RequestOptions;

    constructor(private http: Http) {
        this.options = new RequestOptions({ headers: this.headers });
    }
    authenticate(email: string, password: string): Promise<boolean> {
        return this.post(`/sessions`, { 
            email: email,
            password: password
        }).then((res: Response) => {
            let body = res.json();
            if (body.user) {
                this._user = new User(body.user);
            }
            return this._user !== null;
        });
    }
    post(url: string, data: any): Promise<any> {
        return this.http.post(`${this._url}${url}`, data, this.options).toPromise()
        .catch(this.handleError);
    }
    get(url: string): Promise<any> {
        return this.http.get(`${this._url}${url}`, this.options).toPromise()
        .catch(this.handleError);
    }
    courses(): Promise<Course[]> {
        if (this._courses.length > 0) {
            return Promise.resolve(this._courses);
        }
        return this.get('/courses')
        .then((res: Response) => {
            let body = res.json();
            this._courses = body.courses.map((course: any) => {
                return new Course(course);
            })
            return this._courses;
        });
    }
    course(id: string): Promise<Course> {
        var index: number = 0;
        for (var i = 0; i < this._courses.length; i++) {
            if (this._courses[i].id === id.toString()) {
                if (this._courses[i].chapters) {
                    return Promise.resolve(this._courses[i]);
                } else {
                    index = i;
                    break;
                }
            }
        }
        if (index < 0) {
            index = this._courses.length;
        }
            console.log("huh?");
        return this.get(`/courses/${id}`)
        .then((res: Response) => {
            let course: Course = new Course(res.json().course);
            this._courses[index].chapters = course.chapters;
            return course;
        });
    }
    chapter(courseId: string, chapterId: string): Promise<Chapter> {
        return this.course(courseId).then((course: Course) => {
            var index: any, chapter: any;
            for (let i = 0; i < course.chapters.length; i++) {
                if (course.chapters[i].id === chapterId) {
                    index = i;
                    chapter = course.chapters[i];
                    break;
                }
            }
            if (chapter && chapter.pages) {
                return Promise.resolve(chapter);
            }
            return this.get(`/courses/${courseId}/${chapterId}`)
            .then((res: Response) => {
                let body = res.json();
                let chapter: Chapter = new Chapter(body.chapter);
                course.chapters[index].pages = chapter.pages;
                return chapter;
            });
        })
    }
    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
