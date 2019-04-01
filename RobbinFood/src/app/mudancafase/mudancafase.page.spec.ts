import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MudancafasePage } from './mudancafase.page';

describe('MudancafasePage', () => {
  let component: MudancafasePage;
  let fixture: ComponentFixture<MudancafasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MudancafasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MudancafasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
