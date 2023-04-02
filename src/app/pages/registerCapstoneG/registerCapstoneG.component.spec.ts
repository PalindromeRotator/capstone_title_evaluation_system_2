import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponentCapstoneG } from './registerFaculty.component';

describe('RegisterComponent', () => {
  let component: RegisterComponentCapstoneG;
  let fixture: ComponentFixture<RegisterComponentCapstoneG>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponentCapstoneG ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponentCapstoneG);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
