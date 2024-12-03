import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent {
  @Input() todo: Todo | null = null;
  @Output() closeModalEvent = new EventEmitter<void>();
  @Output() updateTodoEvent = new EventEmitter<Todo>();

  constructor(private todoService: TodoService) {}

  toggleTodoStatus(): void {
    if (this.todo) {
      this.todo.done = !this.todo.done;
      this.todoService.updateTodo(this.todo).subscribe((updatedTodo) => {
        this.updateTodoEvent.emit(updatedTodo);
      });
    }
  }

  closeModal(): void {
    this.closeModalEvent.emit();
  }
}
