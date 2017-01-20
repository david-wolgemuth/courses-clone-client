import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CourseService } from './course.service';

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './navbar.component';
import { CoursesIndexComponent }  from './courses-index.component';
import { CourseComponent }  from './course.component';
import { ChapterComponent }  from './chapter.component';
import { PageComponent } from './page.component';

import { RouterModule } from '@angular/router';

@NgModule({
    imports: [ 
        BrowserModule,
        RouterModule.forRoot([
            {
                path:      'courses',
                component: CoursesIndexComponent
            },
            {
                path:      'courses/:id',
                component: CourseComponent
            },
            {
                path:      'courses/:course_id/:chapter_id',
                component: ChapterComponent
            },
            {
                path:      'courses/:course_id/:chapter_id/:page_id',
                component: PageComponent
            }
        ])
   ],
    providers: [ 
        CourseService
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        CourseComponent,
        ChapterComponent,
        PageComponent,
        CoursesIndexComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
