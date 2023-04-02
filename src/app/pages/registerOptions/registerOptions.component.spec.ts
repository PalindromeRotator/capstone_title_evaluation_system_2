import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponentOptions } from './registerOptions.component';

describe('RegisterComponent', () => {
  let component: RegisterComponentOptions ;
  let fixture: ComponentFixture<RegisterComponentOptions >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponentOptions  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponentOptions );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
