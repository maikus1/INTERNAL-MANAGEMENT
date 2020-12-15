import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubarEngineerComponent } from './menubar-engineer.component';

describe('MenubarEngineerComponent', () => {
  let component: MenubarEngineerComponent;
  let fixture: ComponentFixture<MenubarEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenubarEngineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubarEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
