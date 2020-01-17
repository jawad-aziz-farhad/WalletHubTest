import { DigitOnlyDirective } from './digit-only.directive';

describe('DigitOnlyDirective', () => {

  let elRef = { nativeElement: document.createElement('input') };
  it('should create an instance', () => {
    const directive = new DigitOnlyDirective(elRef);
    expect(directive).toBeTruthy();
  });
});