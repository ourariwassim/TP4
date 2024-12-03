import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/interfaces/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-templatedriven-form',
  templateUrl: './todo-templatedriven-form.component.html',
  styleUrls: ['./todo-templatedriven-form.component.css']
})
export class TodoTemplatedrivenFormComponent {
  static nextId = 1; // Variable statique pour générer des IDs uniques

  newTodo: Todo = {
    id: 0,
    title: '',
    description: '',
    date: new Date(),
    done: false
  };

  constructor(private todoService: TodoService, public router: Router) {}

  addTodo(): void {
    this.newTodo.id = TodoTemplatedrivenFormComponent.nextId++; // Assigner un ID unique
    this.todoService.addTodo(this.newTodo).subscribe(
      () => {
        alert('Tâche ajoutée avec succès');
        this.router.navigate(['/todos']); // Redirige vers la liste des tâches après l'ajout
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du todo:', error);
      }
    );
  }
}
