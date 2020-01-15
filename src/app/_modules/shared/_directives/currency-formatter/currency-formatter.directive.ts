import { Directive, ElementRef, OnInit, HostListener } from '@angular/core';
import { CustomCurrencyPipe } from '../../_pipes/custom-currency-pipe/custom-currency-pipe.pipe';

@Directive({
  selector: '[currencyFormatter]'
})
export class CurrencyFormatterDirective implements OnInit {

  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: CustomCurrencyPipe,
  ) {
    this.el = this.elementRef.nativeElement;
  }

  ngOnInit() {
    this.el.value = this.currencyPipe.transform(this.el.value);
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    this.el.value = this.currencyPipe.parse(value); // opossite of transform
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.el.value = this.currencyPipe.transform(value);
  }

}
