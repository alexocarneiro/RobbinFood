import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { JantarPage } from './jantar.page';
var routes = [
    {
        path: '',
        component: JantarPage
    }
];
var JantarPageModule = /** @class */ (function () {
    function JantarPageModule() {
    }
    JantarPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [JantarPage]
        })
    ], JantarPageModule);
    return JantarPageModule;
}());
export { JantarPageModule };
//# sourceMappingURL=jantar.module.js.map