import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CourseService } from './course.service';

import { CoursesIndexComponent }  from './courses-index.component';
import { CourseComponent }  from './course.component';
import { NavbarComponent }  from './navbar.component';
import { AppComponent }  from './app.component';

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
        CoursesIndexComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
