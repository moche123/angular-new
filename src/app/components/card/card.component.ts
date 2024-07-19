import { Component } from '@angular/core';
import { ColorDirective } from '../../directives/color/color.directive';
import { AppearanceDirective } from '../../directives/appearence/appearance.directive';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
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
export class CardComponent {}
