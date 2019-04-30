import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AlmocoPage } from './almoco.page';
var routes = [
    {
        path: '',
        component: AlmocoPage
    }
];
var AlmocoPageModule = /** @class */ (function () {
    function AlmocoPageModule() {
    }
    AlmocoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AlmocoPage]
        })
    ], AlmocoPageModule);
    return AlmocoPageModule;
}());
export { AlmocoPageModule };
//# sourceMappingURL=almoco.module.js.map