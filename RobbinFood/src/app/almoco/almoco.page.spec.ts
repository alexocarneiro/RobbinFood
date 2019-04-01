import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlmocoPage } from './almoco.page';

describe('AlmocoPage', () => {
  let component: AlmocoPage;
  let fixture: ComponentFixture<AlmocoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlmocoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlmocoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
