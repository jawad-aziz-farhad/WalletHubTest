import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentComponent } from './ng-content.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('NgContentComponent', () => {
  let component: NgContentComponent;
  let fixture: ComponentFixture<NgContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgContentComponent ],
      schemas : [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
