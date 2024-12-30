import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMainMenuComponent } from './header-main-menu.component';

describe('HeaderMainMenuComponent', () => {
  let component: HeaderMainMenuComponent;
  let fixture: ComponentFixture<HeaderMainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderMainMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderMainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
