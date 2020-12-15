import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Engineermenu002Component } from './engineermenu002.component';

describe('Engineermenu002Component', () => {
  let component: Engineermenu002Component;
  let fixture: ComponentFixture<Engineermenu002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Engineermenu002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Engineermenu002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
