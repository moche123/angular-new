import {
  Component,
  ContentChild,
  contentChild,
  ElementRef,
} from '@angular/core';
import { PartialsComponent } from '../partials/partials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PartialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
