import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Managementmenu002Component } from './managementmenu002.component';

describe('Managementmenu002Component', () => {
  let component: Managementmenu002Component;
  let fixture: ComponentFixture<Managementmenu002Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Managementmenu002Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Managementmenu002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
