import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CafedamanhaPage } from './cafedamanha.page';

describe('CafedamanhaPage', () => {
  let component: CafedamanhaPage;
  let fixture: ComponentFixture<CafedamanhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CafedamanhaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafedamanhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
