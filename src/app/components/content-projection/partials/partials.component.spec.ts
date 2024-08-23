import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialsComponent } from './partials.component';

describe('PartialsComponent', () => {
  let component: PartialsComponent;
  let fixture: ComponentFixture<PartialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartialsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
