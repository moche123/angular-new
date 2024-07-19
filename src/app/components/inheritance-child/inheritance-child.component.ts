import { Component, Host, SkipSelf } from '@angular/core';
import { ResolutionModifiersService } from '../../services/resolution-modifiers.service';
import { IDTOMeasurement } from '../../services/interfaces/measurement.interfaces';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-inheritance-child',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './inheritance-child.component.html',
  styleUrl: './inheritance-child.component.scss',
})
export class InheritanceChildComponent {
  constructor() {} // public _resolutionModifiersService: ResolutionModifiersService // @SkipSelf() // @Host() // @Self() // @Optional()

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
