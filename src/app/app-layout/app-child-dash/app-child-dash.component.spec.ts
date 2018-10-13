import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChildDashComponent } from './app-child-dash.component';

describe('AppChildDashComponent', () => {
  let component: AppChildDashComponent;
  let fixture: ComponentFixture<AppChildDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppChildDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppChildDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
