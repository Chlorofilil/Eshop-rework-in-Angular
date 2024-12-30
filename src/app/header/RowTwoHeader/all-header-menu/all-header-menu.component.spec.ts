import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHeaderMenuComponent } from './all-header-menu.component';

describe('AllHeaderMenuComponent', () => {
  let component: AllHeaderMenuComponent;
  let fixture: ComponentFixture<AllHeaderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllHeaderMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
