import { HighlightDirective } from './highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';
import { __metadata, __asyncValues } from 'tslib';

describe('HighlightDirective', () => {
  let el: ElementRef;
  let renderer: Renderer2
  it('should create an instance', () => {
    const directive = new HighlightDirective(el,renderer);
    expect(directive).toBeTruthy();
  });
});
