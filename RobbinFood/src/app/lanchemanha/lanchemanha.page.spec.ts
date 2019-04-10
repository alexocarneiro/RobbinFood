import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanchemanhaPage } from './lanchemanha.page';

describe('LanchemanhaPage', () => {
  let component: LanchemanhaPage;
  let fixture: ComponentFixture<LanchemanhaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanchemanhaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanchemanhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
