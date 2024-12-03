import { Component } from '@angular/core';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todoList: Todo[] = [];
  selectedTodo: Todo | null = null;
  isAddTodoModalOpen = false;
  todoToEdit: Todo | null = null;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos(): void {
    this.todoService.getTodoList().subscribe((todos) => {
      this.todoList = todos;
    });
  }

  showTodoDetail(todo: Todo): void {
    this.selectedTodo = todo;
  }

  closeModal(): void {
    this.selectedTodo = null;
  }

  updateTodoList(updatedTodo: Todo): void {
    const index = this.todoList.findIndex((todo) => todo.id === updatedTodo.id);
    if (index !== -1) {
      this.todoList[index] = updatedTodo;
    }
  }

  deleteTodo(todo: Todo): void {
    this.todoService.deleteTodo(todo).subscribe(() => {
      this.todoList = this.todoList.filter((t) => t.id !== todo.id);
    });
  }

  openAddTodoModal(): void {
    this.isAddTodoModalOpen = true;
  }

  closeAddTodoModal(): void {
    this.isAddTodoModalOpen = false;
  }

  handleNewTodoAdded(todo: Todo): void {
    this.todoList.push(todo);
    this.closeAddTodoModal();
  }


  openEditModal(todo: Todo): void {
    this.todoToEdit = { ...todo }; // Cloner l'objet pour éviter la liaison directe
  }

  closeEditModal(): void {
    this.todoToEdit = null;
  }

  handleTodoUpdated(updatedTodo: Todo): void {
    const index = this.todoList.findIndex((todo) => todo.id === updatedTodo.id);
    if (index !== -1) {
      this.todoList[index] = updatedTodo;
    }
    this.closeEditModal();
  }
}
