import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapstoneGroupList } from './CapstoneGroupList.component';

describe('CapstoneGroupList', () => {
  let component: CapstoneGroupList;
  let fixture: ComponentFixture<CapstoneGroupList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapstoneGroupList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapstoneGroupList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
