
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CourseService } from './course.service';

@Component({
    templateUrl: 'app/login.component.html'
})
export class LoginComponent {
    email = 'james@brown.com';
    password = 'asdf';
    constructor(private courseService: CourseService, private router: Router) {

    }
    login() {
        this.courseService.authenticate(this.email, this.password)
        .then(success => {
            if (success) {
                this.router.navigate(['/courses']);
            }
        })
    }
}
