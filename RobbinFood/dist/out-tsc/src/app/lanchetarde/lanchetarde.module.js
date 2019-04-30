import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LanchetardePage } from './lanchetarde.page';
var routes = [
    {
        path: '',
        component: LanchetardePage
    }
];
var LanchetardePageModule = /** @class */ (function () {
    function LanchetardePageModule() {
    }
    LanchetardePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [LanchetardePage]
        })
    ], LanchetardePageModule);
    return LanchetardePageModule;
}());
export { LanchetardePageModule };
//# sourceMappingURL=lanchetarde.module.js.map