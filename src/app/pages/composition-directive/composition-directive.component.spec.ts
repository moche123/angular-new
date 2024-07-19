import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionDirectiveComponent } from './composition-directive.component';

describe('CompositionDirectiveComponent', () => {
  let component: CompositionDirectiveComponent;
  let fixture: ComponentFixture<CompositionDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompositionDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompositionDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
