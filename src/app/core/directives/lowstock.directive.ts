import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLowstock]',
})
export class LowstockDirective {
  @Input({ alias: 'appLowstock', required: true }) isLowStock!: boolean;
  private hoverElement!: HTMLElement
  
  constructor(private _renderer: Renderer2, private _el: ElementRef ) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.displayBlock()
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.removeBlock()

  }
  displayBlock() {

    this.hoverElement = this._renderer.createElement("div") as HTMLDivElement ;
    this._renderer.addClass(this.hoverElement, 'low-stock');
    this.hoverElement.innerHTML = 'Few Items left';

    this._renderer.appendChild(this._el.nativeElement, this.hoverElement);
  }

  removeBlock() {
    if(this.hoverElement) {
      this._renderer.removeChild(this._el.nativeElement, this.hoverElement)
    }

  }



}
