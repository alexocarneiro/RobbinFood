import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MercadoPage } from './mercado.page';
var routes = [
    {
        path: '',
        component: MercadoPage
    }
];
var MercadoPageModule = /** @class */ (function () {
    function MercadoPageModule() {
    }
    MercadoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MercadoPage]
        })
    ], MercadoPageModule);
    return MercadoPageModule;
}());
export { MercadoPageModule };
//# sourceMappingURL=mercado.module.js.map