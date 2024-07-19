import {
  Directive,
  ElementRef,
  Host,
  HostBinding,
  Input,
  Optional,
} from '@angular/core';
import { ResolutionModifiersService } from '../../services/resolution-modifiers.service';

@Directive({
  selector: '[appColor]',
  standalone: true,
  providers: [
    {
      provide: ResolutionModifiersService,
      useValue: 'A',
    },
  ],
})
export class ColorDirective {
  @Input()
  color: 'primary' | 'secondary' = 'primary';

  constructor(
    @Host()
    @Optional()
    public _resolutionModifiersService: ResolutionModifiersService,
    private elementRef: ElementRef
  ) {
    console.log(_resolutionModifiersService);
    // console.log(this.color);
    console.log(elementRef.nativeElement);
  }

  @HostBinding('class')
  protected get computedHostClass() {
    return `df-${[this.color]}`;
  }
}
