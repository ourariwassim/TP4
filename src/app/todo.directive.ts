import { Directive, ElementRef, Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: 'appTodo'
})
export class TodoDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }


  // Méthode pour définir ou enlever l'ombre
  private setShadow(shadow: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'box-shadow', shadow);
  }

  // Gestion du survol de la souris (mouseenter)
  @HostListener('mouseenter') onMouseEnter(): void {
    this.setShadow('5px 5px 10px 2px rgba(0, 0, 0, 0.5)'); // Applique l'ombre
  }

  // Gestion du retrait de la souris (mouseleave)
  @HostListener('mouseleave') onMouseLeave(): void {
    this.setShadow('none'); // Retire l'ombre
  }

}
