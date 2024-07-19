import { Component } from '@angular/core';
import { ColorDirective } from '../../directives/color/color.directive';
import { AppearanceDirective } from '../../directives/appearence/appearance.directive';

@Component({
  selector: 'button[dfButton], a[dfButton]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  hostDirectives: [
    {
      directive: ColorDirective,
      inputs: ['color'],
    },
    {
      directive: AppearanceDirective,
      inputs: ['appearance'],
    },
  ],
})
export class ButtonComponent {}
