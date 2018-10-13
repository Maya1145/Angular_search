import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppParentDashComponent } from './app-parent-dash.component';

describe('AppParentDashComponent', () => {
  let component: AppParentDashComponent;
  let fixture: ComponentFixture<AppParentDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppParentDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppParentDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
