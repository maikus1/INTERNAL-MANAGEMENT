import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Managementmenu003Component } from './managementmenu003.component';

describe('Managementmenu003Component', () => {
  let component: Managementmenu003Component;
  let fixture: ComponentFixture<Managementmenu003Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Managementmenu003Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Managementmenu003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
