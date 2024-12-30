import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanHeaderMenuComponent } from './woman-header-menu.component';

describe('WomanHeaderMenuComponent', () => {
  let component: WomanHeaderMenuComponent;
  let fixture: ComponentFixture<WomanHeaderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WomanHeaderMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomanHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
