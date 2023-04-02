import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminResetPass } from './AdminResetPass.component';

describe('RegisterComponent', () => {
  let component: AdminResetPass;
  let fixture: ComponentFixture<AdminResetPass>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminResetPass ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminResetPass);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});

