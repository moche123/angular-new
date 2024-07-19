import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlValueAccesorComponent } from './control-value-accesor.component';

describe('ControlValueAccesorComponent', () => {
  let component: ControlValueAccesorComponent;
  let fixture: ComponentFixture<ControlValueAccesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlValueAccesorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlValueAccesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
