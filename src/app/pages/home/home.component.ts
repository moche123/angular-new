import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContentProjectionComponent } from '../../components/content-projection/content-projection.component';
import { ControlValueAccesorComponent } from '../../components/control-value-accesor/control-value-accesor.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContentProjectionComponent,
    ControlValueAccesorComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  public homeForm: FormGroup = new FormGroup({
    name: new FormControl('Name', Validators.required),
    rating: new FormControl(4, Validators.min(3)),
  });
}
