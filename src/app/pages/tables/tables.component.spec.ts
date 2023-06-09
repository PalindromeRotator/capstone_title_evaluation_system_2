import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { tables } from './tables.component';

describe('tables', () => {
  let component: tables;
  let fixture: ComponentFixture<tables>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ tables ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(tables);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
