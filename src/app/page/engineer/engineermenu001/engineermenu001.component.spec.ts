import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Engineermenu001Component } from './engineermenu001.component';

describe('Engineermenu001Component', () => {
  let component: Engineermenu001Component;
  let fixture: ComponentFixture<Engineermenu001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Engineermenu001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Engineermenu001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
