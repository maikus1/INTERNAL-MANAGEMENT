import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Managementmenu004Component } from './managementmenu004.component';

describe('Managementmenu004Component', () => {
  let component: Managementmenu004Component;
  let fixture: ComponentFixture<Managementmenu004Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Managementmenu004Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Managementmenu004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
