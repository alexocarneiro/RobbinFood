import * as tslib_1 from "tslib";
import { FoodsService } from './../foods.service';
import { RegrasService } from './../regras.service';
import { Component } from '@angular/core';
var AlmocoPage = /** @class */ (function () {
    function AlmocoPage(food, Regras) {
        this.food = food;
        this.Regras = Regras;
        this.RobbinImage = '../../assets/robin_01.png';
        this.titleImage = '../../assets/logo_robin_food.png';
        this.arrayImages = this.food.arrayImagesAlmoco1;
    }
    AlmocoPage.prototype.ngOnInit = function () {
    };
    AlmocoPage.prototype.escolheAlimento = function () {
        for (var i = 1; i < 3; i++) {
            switch (i) {
                case 1:
                    this.arrayImages = this.food.arrayImagesAlmoco2;
                case 2:
                    this.arrayImages = this.food.arrayImagesAlmoco3;
                    break;
            }
        }
        /*let pontos = 10;
        let valAtual =  8;
        if (pontos > valAtual){
          this.RobbinImage = '../../assets/robin_04_2.png';
        
        
        }*/
    };
    AlmocoPage = tslib_1.__decorate([
        Component({
            selector: 'app-almoco',
            templateUrl: './almoco.page.html',
            styleUrls: ['./almoco.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FoodsService,
            RegrasService])
    ], AlmocoPage);
    return AlmocoPage;
}());
export { AlmocoPage };
//# sourceMappingURL=almoco.page.js.map