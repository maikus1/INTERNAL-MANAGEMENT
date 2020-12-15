import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeengineerComponent } from './homeengineer.component';

describe('HomeengineerComponent', () => {
  let component: HomeengineerComponent;
  let fixture: ComponentFixture<HomeengineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeengineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeengineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
