"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var KeyUpComponent_v4 = /** @class */ (function () {
    function KeyUpComponent_v4() {
        this.values = '';
    }
    KeyUpComponent_v4 = __decorate([
        core_1.Component({
            selector: 'key-up4',
            template: "\n        <input #box (keyup.enter)=\"values=box.value\" (blur)=\"values=box.value\">\n        <p>{{values}}</p>\n    "
        })
    ], KeyUpComponent_v4);
    return KeyUpComponent_v4;
}());
exports.KeyUpComponent_v4 = KeyUpComponent_v4;
//# sourceMappingURL=keyup.components_v4.js.map