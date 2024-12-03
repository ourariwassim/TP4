import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-update-todo',
  templateUrl: './update-todo.component.html',
  styleUrls: ['./update-todo.component.css']
})
export class UpdateTodoComponent implements OnInit {
  todoToEdit: Todo | null = null;
  loading = true;

  constructor(
    private todoService: TodoService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    const todoId = +this.route.snapshot.paramMap.get('id')!;
    this.getTodoById(todoId);
  }

  getTodoById(id: number): void {
    this.todoService.getTodoById(id).subscribe(
      (todo) => {
        this.todoToEdit = todo;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching Todo:', error);
        this.loading = false;
        alert('Error fetching the Todo item.');
      }
    );
  }

  updateTodo(): void {
    if (this.todoToEdit) {
      this.todoService.updateTodo(this.todoToEdit).subscribe(
        (updatedTodo) => {
          this.router.navigate(['/']); // Redirect after update
        },
        (error) => {
          console.error('Error updating Todo:', error);
          alert('Error updating the todo.');
        }
      );
    }
  }
}
