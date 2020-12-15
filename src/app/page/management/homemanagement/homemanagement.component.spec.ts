import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemanagementComponent } from './homemanagement.component';

describe('HomemanagementComponent', () => {
  let component: HomemanagementComponent;
  let fixture: ComponentFixture<HomemanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomemanagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomemanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
