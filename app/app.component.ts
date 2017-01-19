
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar.component'

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <router-outlet></router-outlet>
    `,
})
export class AppComponent  { name = 'Angular'; }
