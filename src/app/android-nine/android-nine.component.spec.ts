import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidNineComponent } from './android-nine.component';

describe('AndroidNineComponent', () => {
  let component: AndroidNineComponent;
  let fixture: ComponentFixture<AndroidNineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidNineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidNineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
