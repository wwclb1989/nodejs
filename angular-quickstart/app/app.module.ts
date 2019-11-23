import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ClickMeComponent} from "./click-me.component";
import {KeyUpComponent} from "./keyup.component";
import {LoopbackComponent} from "./loop-back.component";
import {KeyUpComponent_v2} from "./keyup.components_v2";
import {KeyUpComponent_v3} from "./keyup.components_v3";
import {KeyUpComponent_v4} from "./keyup.components_v4";

/**
 declarations （声明） - 视图类属于这个模块。 Angular 有三种类型的视图类： 组件 、 指令 和 管道 。

 exports - 声明（ declaration ）的子集，可用于其它模块中的组件模板 。

 imports - 本模块组件模板中需要由其它导出类的模块。

 providers - 服务的创建者。本模块把它们加入全局的服务表中，让它们在应用中的任何部分都可被访问到。

 bootstrap - 应用的主视图，称为根组件，它是所有其它应用视图的宿主。只有根模块需要设置 bootstrap 属性中。

 */

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, ClickMeComponent, KeyUpComponent, LoopbackComponent, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4],
    bootstrap: [AppComponent, ClickMeComponent, KeyUpComponent, LoopbackComponent, KeyUpComponent_v2, KeyUpComponent_v3, KeyUpComponent_v4]
})
export class AppModule {
}
