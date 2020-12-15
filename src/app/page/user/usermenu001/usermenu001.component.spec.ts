import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usermenu001Component } from './usermenu001.component';

describe('Usermenu001Component', () => {
  let component: Usermenu001Component;
  let fixture: ComponentFixture<Usermenu001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Usermenu001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Usermenu001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
