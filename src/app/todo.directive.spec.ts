import { TodoDirective } from './todo.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('TodoDirective', () => {
  let mockElementRef: ElementRef;
  let mockRenderer: Renderer2;

  beforeEach(() => {
    // Simuler ElementRef
    mockElementRef = { nativeElement: document.createElement('div') } as ElementRef;
    // Simuler Renderer2
    mockRenderer = jasmine.createSpyObj('Renderer2', ['setStyle']);
  });

  it('should create an instance', () => {
    const directive = new TodoDirective(mockElementRef, mockRenderer);
    expect(directive).toBeTruthy();
  });
});
