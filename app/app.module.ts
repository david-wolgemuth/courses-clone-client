import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CourseService } from './course.service';

import { AppComponent }  from './app.component';
import { NavbarComponent }  from './navbar.component';
import { LoginComponent } from './login.component';
import { CoursesIndexComponent }  from './courses-index.component';
import { CourseComponent }  from './course.component';
import { ChapterComponent }  from './chapter.component';
import { PageComponent } from './page.component';

import { RouterModule } from '@angular/router';

import { VisibilityService } from './visiblity.service';

@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule,
        HttpModule,
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
            },
            {
                path:      'login',
                component: LoginComponent
            }
        ])
   ],
    providers: [ 
        CourseService,
        VisibilityService
    ],
    declarations: [
        AppComponent,
        NavbarComponent,
        CourseComponent,
        ChapterComponent,
        PageComponent,
        LoginComponent,
        CoursesIndexComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
