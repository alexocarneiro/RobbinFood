import * as tslib_1 from "tslib";
import { FoodsService } from './../foods.service';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var JantarPage = /** @class */ (function () {
    function JantarPage(foodService, navCtrl) {
        this.foodService = foodService;
        this.navCtrl = navCtrl;
        this.RobbinImage = '../../assets/robin_01.png';
        /*arrayImages = [
          { imgUrl: '../../assets/Frango.png', name: 'Linguinha 1'},
          { imgUrl: '../../assets/peixe.png', name: 'Linguinha 2'},
          { imgUrl: '../../assets/salgadinho.png', name: 'Linguinha 3'},
        ];*/
        this.arrayImages = [];
    }
    JantarPage.prototype.ngOnInit = function () {
    };
    JantarPage.prototype.jogar = function () {
        //código de criação de cadastro Firebase
        this.navCtrl.navigateForward('tabs/home');
    };
    JantarPage = tslib_1.__decorate([
        Component({
            selector: 'app-jantar',
            templateUrl: './jantar.page.html',
            styleUrls: ['./jantar.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FoodsService,
            NavController])
    ], JantarPage);
    return JantarPage;
}());
export { JantarPage };
//# sourceMappingURL=jantar.page.js.map