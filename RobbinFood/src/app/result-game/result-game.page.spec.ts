import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultGamePage } from './result-game.page';

describe('ResultGamePage', () => {
  let component: ResultGamePage;
  let fixture: ComponentFixture<ResultGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultGamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
