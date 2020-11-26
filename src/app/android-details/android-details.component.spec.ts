import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidDetailsComponent } from './android-details.component';

describe('AndroidDetailsComponent', () => {
  let component: AndroidDetailsComponent;
  let fixture: ComponentFixture<AndroidDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
