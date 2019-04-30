import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var LanchemanhaPage = /** @class */ (function () {
    function LanchemanhaPage() {
        this.RobbinImage = '../../assets/robin_01.png';
        this.arrayImages = [
            { imgUrl: '../../assets/Frango.png', name: 'Linguinha 1' },
            { imgUrl: '../../assets/peixe.png', name: 'Linguinha 2' },
            { imgUrl: '../../assets/salgadinho.png', name: 'Linguinha 3' },
        ];
    }
    LanchemanhaPage.prototype.ngOnInit = function () {
    };
    LanchemanhaPage = tslib_1.__decorate([
        Component({
            selector: 'app-lanchemanha',
            templateUrl: './lanchemanha.page.html',
            styleUrls: ['./lanchemanha.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], LanchemanhaPage);
    return LanchemanhaPage;
}());
export { LanchemanhaPage };
//# sourceMappingURL=lanchemanha.page.js.map