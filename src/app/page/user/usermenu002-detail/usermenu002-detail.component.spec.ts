import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Usermenu002DetailComponent } from './usermenu002-detail.component';

describe('Usermenu002DetailComponent', () => {
  let component: Usermenu002DetailComponent;
  let fixture: ComponentFixture<Usermenu002DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Usermenu002DetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Usermenu002DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
