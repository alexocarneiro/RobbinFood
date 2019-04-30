import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CafedamanhaPage } from './cafedamanha.page';
var routes = [
    {
        path: '',
        component: CafedamanhaPage
    }
];
var CafedamanhaPageModule = /** @class */ (function () {
    function CafedamanhaPageModule() {
    }
    CafedamanhaPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CafedamanhaPage]
        })
    ], CafedamanhaPageModule);
    return CafedamanhaPageModule;
}());
export { CafedamanhaPageModule };
//# sourceMappingURL=cafedamanha.module.js.map