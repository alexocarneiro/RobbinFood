import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanchetardePage } from './lanchetarde.page';

describe('LanchetardePage', () => {
  let component: LanchetardePage;
  let fixture: ComponentFixture<LanchetardePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanchetardePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanchetardePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
