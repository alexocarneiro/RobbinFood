import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LanchemanhaPage } from './lanchemanha.page';
var routes = [
    {
        path: '',
        component: LanchemanhaPage
    }
];
var LanchemanhaPageModule = /** @class */ (function () {
    function LanchemanhaPageModule() {
    }
    LanchemanhaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [LanchemanhaPage]
        })
    ], LanchemanhaPageModule);
    return LanchemanhaPageModule;
}());
export { LanchemanhaPageModule };
//# sourceMappingURL=lanchemanha.module.js.map