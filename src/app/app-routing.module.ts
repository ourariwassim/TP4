import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoReactiveFormComponent } from './components/todo-reactive-form/todo-reactive-form.component';
import { TodoTemplatedrivenFormComponent } from './components/todo-templatedriven-form/todo-templatedriven-form.component';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component';
import { authGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: TodoListComponent, canActivate: [authGuard] },
  { path: 'sign-in', component: TodoReactiveFormComponent },
  { path: 'new', component: TodoTemplatedrivenFormComponent , canActivate: [authGuard] },
  { path: 'update-todo/:id', component: UpdateTodoComponent ,canActivate: [authGuard]}, 
  { path: '', redirectTo:'sign-in', pathMatch: 'full' },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
