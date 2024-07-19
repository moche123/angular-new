import {
  Directive,
  ElementRef,
  Host,
  HostBinding,
  inject,
  Input,
  Optional,
} from '@angular/core';
import { ResolutionModifiersService } from '../../services/resolution-modifiers.service';

@Directive({
  selector: '[canAppearance]',
  standalone: true,
  // providers: [
  //   {
  //     provide: ResolutionModifiersService,
  //     useValue: 'B',
  //   },
  // ],
})
export class AppearanceDirective {
  @Input()
  appearance: 'solid' | 'stroked' = 'solid';
  constructor(
    @Host()
    @Optional()
    public _resolutionModifiersService: ResolutionModifiersService,
    private elementRef: ElementRef
  ) {
    console.log(_resolutionModifiersService);
    // console.log(this.appearance);
    console.log(elementRef.nativeElement);
  }

  @HostBinding('class')
  protected get computedHostClass() {
    return `df-${[this.appearance]}`;
  }
}
