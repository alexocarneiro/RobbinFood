import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColcacaoIPage } from './colcacao-i.page';

describe('ColcacaoIPage', () => {
  let component: ColcacaoIPage;
  let fixture: ComponentFixture<ColcacaoIPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColcacaoIPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColcacaoIPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
