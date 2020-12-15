import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usermenu002Component } from './usermenu002.component';

describe('Usermenu002Component', () => {
  let component: Usermenu002Component;
  let fixture: ComponentFixture<Usermenu002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Usermenu002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Usermenu002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
