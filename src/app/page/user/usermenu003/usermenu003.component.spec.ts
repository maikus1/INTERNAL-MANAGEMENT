import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usermenu003Component } from './usermenu003.component';

describe('Usermenu003Component', () => {
  let component: Usermenu003Component;
  let fixture: ComponentFixture<Usermenu003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Usermenu003Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Usermenu003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
