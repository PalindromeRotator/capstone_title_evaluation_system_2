import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapstoneTitles } from './CapstoneTitles.component';

describe('CapstoneTitles', () => {
  let component: CapstoneTitles;
  let fixture: ComponentFixture<CapstoneTitles>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapstoneTitles ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapstoneTitles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
