import {
  Component,
  Host,
  inject,
  OnInit,
  Optional,
  Self,
  SkipSelf,
} from '@angular/core';
import { ResolutionModifiersService } from '../../services/resolution-modifiers.service';
import { CardComponent } from '../../components/card/card.component';
import { IDTOMeasurement } from '../../services/interfaces/measurement.interfaces';
import { CommonModule } from '@angular/common';
import { InheritanceChildComponent } from '../../components/inheritance-child/inheritance-child.component';

@Component({
  selector: 'app-inheritance',
  standalone: true,
  imports: [CardComponent, CommonModule, InheritanceChildComponent],
  templateUrl: './inheritance.component.html',
  styleUrl: './inheritance.component.scss',
  // providers: [ResolutionModifiersService],
})
export class InheritanceComponent implements OnInit {
  // constructor(
  // @Optional()
  // @Self()
  // @SkipSelf()
  // @Host()
  // public _resolutionModifiersService: ResolutionModifiersService
  // ) {}
  public info: IDTOMeasurement = {
    id: 0,
    name: '',
  };
  ngOnInit(): void {
    // try {
    //   this.info = this._resolutionModifiersService.getMeasurements();
    // } catch {
    //   console.log('no data');
    // }
  }
}
