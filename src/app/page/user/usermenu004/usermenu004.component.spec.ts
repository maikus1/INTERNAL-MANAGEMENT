import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usermenu004Component } from './usermenu004.component';

describe('Usermenu004Component', () => {
  let component: Usermenu004Component;
  let fixture: ComponentFixture<Usermenu004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Usermenu004Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Usermenu004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
