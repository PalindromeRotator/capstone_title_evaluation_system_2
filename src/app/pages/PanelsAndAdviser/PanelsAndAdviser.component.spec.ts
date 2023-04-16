import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelsAndAdviser } from './PanelsAndAdviser.component';

describe('PanelsAndAdviser', () => {
  let component: PanelsAndAdviser;
  let fixture: ComponentFixture<PanelsAndAdviser>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelsAndAdviser ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelsAndAdviser);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
