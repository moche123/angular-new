import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-partials',
  standalone: true,
  imports: [],
  templateUrl: './partials.component.html',
  styleUrl: './partials.component.scss',
})
export class PartialsComponent implements AfterContentInit, AfterViewInit {
  @ViewChild('text') text!: ElementRef;
  @ContentChild('header') header!: ElementRef;
  @ContentChildren('item') children!: QueryList<ElementRef>;

  ngAfterContentInit() {
    if (this.header && this.children) {
      this.header.nativeElement.style.backgroundColor = 'blue';
      this.children.forEach((child: ElementRef, index: number) => {
        child.nativeElement.innerHTML = `New content ${index + 1}`;
      });
    }
  }

  ngAfterViewInit(): void {
    if (this.text) {
      this.text.nativeElement.style.backgroundColor = 'red';
    }
  }
}
