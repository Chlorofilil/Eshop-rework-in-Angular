import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManHeaderMenuComponent } from './man-header-menu.component';

describe('ManHeaderMenuComponent', () => {
  let component: ManHeaderMenuComponent;
  let fixture: ComponentFixture<ManHeaderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManHeaderMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
