import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapstoneGroupView } from './CapstoneGroupView.component';

describe('CapstoneGroup', () => {
  let component: CapstoneGroupView;
  let fixture: ComponentFixture<CapstoneGroupView>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapstoneGroupView ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapstoneGroupView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
