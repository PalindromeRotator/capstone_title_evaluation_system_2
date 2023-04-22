import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGeneration } from './ReportGeneration.component';

describe('ReportGeneration', () => {
  let component: ReportGeneration;
  let fixture: ComponentFixture<ReportGeneration>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportGeneration ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportGeneration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
