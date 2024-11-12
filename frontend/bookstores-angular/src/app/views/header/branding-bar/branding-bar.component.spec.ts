import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingBarComponent } from './branding-bar.component';

describe('BrandingBarComponent', () => {
  let component: BrandingBarComponent;
  let fixture: ComponentFixture<BrandingBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandingBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandingBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
