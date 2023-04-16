import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelsAndAdviserView } from './PanelsAndAdviserView.component';

describe('PanelsAndAdviserView', () => {
  let component: PanelsAndAdviserView;
  let fixture: ComponentFixture<PanelsAndAdviserView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelsAndAdviserView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelsAndAdviserView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
