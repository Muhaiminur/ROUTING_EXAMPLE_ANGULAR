import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidTenComponent } from './android-ten.component';

describe('AndroidTenComponent', () => {
  let component: AndroidTenComponent;
  let fixture: ComponentFixture<AndroidTenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndroidTenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndroidTenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
