import { CurrencyFormatterDirective } from './currency-formatter.directive';
import { ElementRef } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { CustomCurrencyPipe } from '../../_pipes/custom-currency-pipe/custom-currency-pipe.pipe';

describe('CurrencyFormatterDirective', () => {
  let elRef: ElementRef = { nativeElement: document.createElement('input') };
  let currPip: CustomCurrencyPipe;
  it('should create an instance', () => {
    const directive = new CurrencyFormatterDirective(elRef , currPip);
    expect(directive).toBeTruthy();
  });
});
