import {Component} from '@angular/core';

@Component({
    selector: 'key-up',
    template: `
        <input (keyup)="onKey($event)">
        <p>{{values}}</p>
    `
})
export class KeyUpComponent {
    values = '';

    // 非强类型
    onKey(event: any) {
        this.values += event.target.value + ' | ';
    }

}
