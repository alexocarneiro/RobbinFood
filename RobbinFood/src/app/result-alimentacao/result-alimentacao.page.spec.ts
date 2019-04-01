import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultAlimentacaoPage } from './result-alimentacao.page';

describe('ResultAlimentacaoPage', () => {
  let component: ResultAlimentacaoPage;
  let fixture: ComponentFixture<ResultAlimentacaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultAlimentacaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultAlimentacaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
