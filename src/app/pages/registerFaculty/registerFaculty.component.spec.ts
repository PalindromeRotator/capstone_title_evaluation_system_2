import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponentFaculty } from './registerFaculty.component';

describe('RegisterComponent', () => {
  let component: RegisterComponentFaculty;
  let fixture: ComponentFixture<RegisterComponentFaculty>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponentFaculty ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponentFaculty);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
