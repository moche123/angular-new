import { Component } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-composition-directive',
  standalone: true,
  imports: [ButtonComponent, CardComponent],
  templateUrl: './composition-directive.component.html',
  styleUrl: './composition-directive.component.scss',
})
export class CompositionDirectiveComponent {}
