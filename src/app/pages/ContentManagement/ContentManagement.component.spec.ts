import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentManagerment } from './ContentManagement.component';

describe('ContentManagerment', () => {
  let component: ContentManagerment;
  let fixture: ComponentFixture<ContentManagerment>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentManagerment ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentManagerment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
