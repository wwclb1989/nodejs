import {Component} from '@angular/core';
import {Site} from './site';

/**
 @Component 中的配置项说明：

 selector - 一个 css 选择器，它告诉 Angular 在 父级 HTML 中寻找一个 <mylist> 标签，然后创建该组件，并插入此标签中。

 templateUrl - 组件 HTML 模板的地址。

 directives - 一个数组，包含 此 模板需要依赖的组件或指令。

 providers - 一个数组，包含组件所依赖的服务所需要的依赖注入提供者。
 */
@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>我喜欢的网站: {{mySite.name}}</h2>
        <p>网站列表:</p>
        <ul>
            <li *ngFor="let site of sites">
                {{ site.name }}
            </li>
        </ul>
        <p *ngIf="sites.length > 3">你有很多个喜欢的网站!</p>
    `
})

export class AppComponent {
    title = '站点列表';
    sites = [
        new Site(1, '菜鸟教程'),
        new Site(2, 'Google'),
        new Site(3, 'Taobao'),
        new Site(4, 'Facebook')
    ];
    mySite = this.sites[0];
}
