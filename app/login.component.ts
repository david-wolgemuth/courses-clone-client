
import { Component } from '@angular/core';

import { CourseService } from './course.service';

@Component({
    templateUrl: 'app/login.component.html'
})
export class LoginComponent {
    email = 'james@brown.com';
    password = 'asdf';
    constructor(private courseService: CourseService) {

    }
    login() {
        this.courseService.authenticate(this.email, this.password)
    }
}
