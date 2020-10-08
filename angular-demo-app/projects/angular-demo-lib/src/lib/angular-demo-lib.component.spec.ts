import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDemoLibComponent } from './angular-demo-lib.component';

describe('AngularDemoLibComponent', () => {
  let component: AngularDemoLibComponent;
  let fixture: ComponentFixture<AngularDemoLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDemoLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDemoLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
