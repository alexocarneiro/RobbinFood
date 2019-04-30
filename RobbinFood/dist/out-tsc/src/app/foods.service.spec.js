import { TestBed } from '@angular/core/testing';
import { FoodsService } from './foods.service';
describe('FoodsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(FoodsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=foods.service.spec.js.map