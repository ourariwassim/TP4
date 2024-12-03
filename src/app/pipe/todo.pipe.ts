import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todo'
})
export class TodoPipe implements PipeTransform {
  transform(todos: any[]): any[] {
    if (!todos) {
      return [];
    }

    const now = new Date().getTime();
    const twoDays = 2 * 24 * 60 * 60 * 1000; // 2 jours en millisecondes

    // Filtrer ou marquer les todos proches de leur échéance sans modifier les objets
    return todos.map(todo => ({
      ...todo,
      isUrgent: todo.date && new Date(todo.date).getTime() - now < twoDays && new Date(todo.date).getTime() > now
    }));
  }
}
