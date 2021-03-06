
import { trigger, animate, style, transition, state } from '@angular/core';

const slideInOut = trigger(
    'slideInOut', [
        transition('void => *', [
            style({ height: '0' }),
            animate('300ms ease-in-out', style({ height: '*' }))
        ]),
        transition('* => void', [
            style({  height: '*' }),
            animate('300ms ease-in-out', style({  height: '0' }))
        ])
    ]
)

export default slideInOut;
