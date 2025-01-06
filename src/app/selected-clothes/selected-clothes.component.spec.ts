import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedClothesComponent } from './selected-clothes.component';

describe('SelectedClothesComponent', () => {
  let component: SelectedClothesComponent;
  let fixture: ComponentFixture<SelectedClothesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedClothesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
