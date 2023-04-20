import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignCoordinator } from './AssignCoordinator.component';

describe('AssignCoordinator', () => {
  let component: AssignCoordinator;
  let fixture: ComponentFixture<AssignCoordinator>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignCoordinator ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignCoordinator);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
