"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var site_1 = require("./site");
/**
 @Component 中的配置项说明：

 selector - 一个 css 选择器，它告诉 Angular 在 父级 HTML 中寻找一个 <mylist> 标签，然后创建该组件，并插入此标签中。

 templateUrl - 组件 HTML 模板的地址。

 directives - 一个数组，包含 此 模板需要依赖的组件或指令。

 providers - 一个数组，包含组件所依赖的服务所需要的依赖注入提供者。
 */
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = '站点列表';
        this.sites = [
            new site_1.Site(1, '菜鸟教程'),
            new site_1.Site(2, 'Google'),
            new site_1.Site(3, 'Taobao'),
            new site_1.Site(4, 'Facebook')
        ];
        this.mySite = this.sites[0];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <h2>\u6211\u559C\u6B22\u7684\u7F51\u7AD9: {{mySite.name}}</h2>\n        <p>\u7F51\u7AD9\u5217\u8868:</p>\n        <ul>\n            <li *ngFor=\"let site of sites\">\n                {{ site.name }}\n            </li>\n        </ul>\n        <p *ngIf=\"sites.length > 3\">\u4F60\u6709\u5F88\u591A\u4E2A\u559C\u6B22\u7684\u7F51\u7AD9!</p>\n    "
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map