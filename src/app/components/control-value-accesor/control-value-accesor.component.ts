import { CommonModule } from '@angular/common';
import { Component, computed, forwardRef, OnInit, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-control-value-accesor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './control-value-accesor.component.html',
  styleUrl: './control-value-accesor.component.scss',
  providers: [
    {
      multi: true,
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ControlValueAccesorComponent),
    },
  ],
})
export class ControlValueAccesorComponent
  implements OnInit, ControlValueAccessor
{
  public ratingArr = signal<number[]>([]);
  public name = computed(() => `${this._name()} - ${this._rating()}`);
  private _rating = signal(3);
  private _name = signal('Moises');
  private _onChanged = signal((_value: number) => {});
  private _onTouched = signal((_value: number) => {});

  ngOnInit(): void {
    for (let i = 0; i < 5; i++) {
      this.ratingArr().push(i);
    }
  }

  onSelect(rating: number) {
    this._rating.set(rating);
    this._onChanged()(this._rating());
    this._onTouched()(this._rating());
  }

  showIcon(index: number) {
    return this._rating() >= index + 1 ? '⭐' : '🌟';
  }

  writeValue(value: number): void {
    if (value) {
      this._rating.set(value);
    }
  }

  registerOnChange(fn: any): void {
    this._onChanged.set(fn);
  }

  registerOnTouched(fn: any): void {
    this._onTouched.set(fn);
  }
}
