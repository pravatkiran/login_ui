import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgainizationSetUpComponent } from './orgainization-set-up.component';

describe('OrgainizationSetUpComponent', () => {
  let component: OrgainizationSetUpComponent;
  let fixture: ComponentFixture<OrgainizationSetUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgainizationSetUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgainizationSetUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
