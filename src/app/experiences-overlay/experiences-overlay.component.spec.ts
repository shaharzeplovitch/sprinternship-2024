import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencesOverlayComponent } from './experiences-overlay.component';

describe('ExperiencesOverlayComponent', () => {
  let component: ExperiencesOverlayComponent;
  let fixture: ComponentFixture<ExperiencesOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExperiencesOverlayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExperiencesOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
