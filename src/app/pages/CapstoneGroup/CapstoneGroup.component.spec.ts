import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapstoneGroup } from './CapstoneGroup.component';

describe('CapstoneGroup', () => {
  let component: CapstoneGroup;
  let fixture: ComponentFixture<CapstoneGroup>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapstoneGroup ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapstoneGroup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
