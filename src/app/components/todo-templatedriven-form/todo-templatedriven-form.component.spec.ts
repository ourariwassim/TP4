import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTemplatedrivenFormComponent } from './todo-templatedriven-form.component';

describe('TodoTemplatedrivenFormComponent', () => {
  let component: TodoTemplatedrivenFormComponent;
  let fixture: ComponentFixture<TodoTemplatedrivenFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodoTemplatedrivenFormComponent]
    });
    fixture = TestBed.createComponent(TodoTemplatedrivenFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
