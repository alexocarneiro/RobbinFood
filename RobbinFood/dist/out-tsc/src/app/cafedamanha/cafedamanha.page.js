import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var CafedamanhaPage = /** @class */ (function () {
    function CafedamanhaPage() {
        this.RobbinImage = '../../assets/robin_01.png';
        this.arrayImages = [
            { imgUrl: '../../assets/Frango.png', name: 'Linguinha 1' },
            { imgUrl: '../../assets/peixe.png', name: 'Linguinha 2' },
            { imgUrl: '../../assets/salgadinho.png', name: 'Linguinha 3' },
        ];
    }
    CafedamanhaPage.prototype.ngOnInit = function () {
    };
    CafedamanhaPage = tslib_1.__decorate([
        Component({
            selector: 'app-cafedamanha',
            templateUrl: './cafedamanha.page.html',
            styleUrls: ['./cafedamanha.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], CafedamanhaPage);
    return CafedamanhaPage;
}());
export { CafedamanhaPage };
//# sourceMappingURL=cafedamanha.page.js.map