import { Component } from '@angular/core';
import { PartialsComponent } from './partials/partials.component';

@Component({
  selector: 'app-content-projection',
  standalone: true,
  imports: [PartialsComponent],
  templateUrl: './content-projection.component.html',
  styleUrl: './content-projection.component.scss',
})
export class ContentProjectionComponent {}
