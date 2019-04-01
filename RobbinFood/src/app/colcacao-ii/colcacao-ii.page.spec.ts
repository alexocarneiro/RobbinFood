import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColcacaoIIPage } from './colcacao-ii.page';

describe('ColcacaoIIPage', () => {
  let component: ColcacaoIIPage;
  let fixture: ComponentFixture<ColcacaoIIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColcacaoIIPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColcacaoIIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
