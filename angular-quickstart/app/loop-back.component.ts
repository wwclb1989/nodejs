import {Component} from '@angular/core'

@Component({
    selector: 'loop-back',
    template: `
        <input #box (keyup)="0">
        <p>{{box.value}}</p>
    `
})
export class LoopbackComponent {
}
