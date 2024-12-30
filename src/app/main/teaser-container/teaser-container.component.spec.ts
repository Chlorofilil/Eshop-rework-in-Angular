import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaserContainerComponent } from './teaser-container.component';

describe('TeaserContainerComponent', () => {
  let component: TeaserContainerComponent;
  let fixture: ComponentFixture<TeaserContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeaserContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaserContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
