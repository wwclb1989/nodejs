"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var click_me_component_1 = require("./click-me.component");
var keyup_component_1 = require("./keyup.component");
var loop_back_component_1 = require("./loop-back.component");
var keyup_components_v2_1 = require("./keyup.components_v2");
var keyup_components_v3_1 = require("./keyup.components_v3");
var keyup_components_v4_1 = require("./keyup.components_v4");
/**
 declarations （声明） - 视图类属于这个模块。 Angular 有三种类型的视图类： 组件 、 指令 和 管道 。

 exports - 声明（ declaration ）的子集，可用于其它模块中的组件模板 。

 imports - 本模块组件模板中需要由其它导出类的模块。

 providers - 服务的创建者。本模块把它们加入全局的服务表中，让它们在应用中的任何部分都可被访问到。

 bootstrap - 应用的主视图，称为根组件，它是所有其它应用视图的宿主。只有根模块需要设置 bootstrap 属性中。

 */
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [app_component_1.AppComponent, click_me_component_1.ClickMeComponent, keyup_component_1.KeyUpComponent, loop_back_component_1.LoopbackComponent, keyup_components_v2_1.KeyUpComponent_v2, keyup_components_v3_1.KeyUpComponent_v3, keyup_components_v4_1.KeyUpComponent_v4],
            bootstrap: [app_component_1.AppComponent, click_me_component_1.ClickMeComponent, keyup_component_1.KeyUpComponent, loop_back_component_1.LoopbackComponent, keyup_components_v2_1.KeyUpComponent_v2, keyup_components_v3_1.KeyUpComponent_v3, keyup_components_v4_1.KeyUpComponent_v4]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map