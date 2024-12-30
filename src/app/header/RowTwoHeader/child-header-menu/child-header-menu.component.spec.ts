import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildHeaderMenuComponent } from './child-header-menu.component';

describe('ChildHeaderMenuComponent', () => {
  let component: ChildHeaderMenuComponent;
  let fixture: ComponentFixture<ChildHeaderMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildHeaderMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildHeaderMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
