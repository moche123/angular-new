import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResolutionModifiersService } from './services/resolution-modifiers.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // providers: [ResolutionModifiersService],
  // ==> this is for skipself
})
export class AppComponent {
  title = 'angular-all';
}
