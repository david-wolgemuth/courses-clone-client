
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar.component'

@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `,
})
export class AppComponent  { name = 'Angular'; }
