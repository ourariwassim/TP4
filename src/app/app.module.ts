import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeardBarComponent } from './components/heard-bar/heard-bar.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { UpdateTodoComponent } from './components/update-todo/update-todo.component';
import { TodoReactiveFormComponent } from './components/todo-reactive-form/todo-reactive-form.component';
import { TodoPipe } from './pipe/todo.pipe';
import { TodoDirective } from './directive/todo.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup, FormGroupDirective, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoTemplatedrivenFormComponent } from './components/todo-templatedriven-form/todo-templatedriven-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HeardBarComponent,
    TodoListComponent,
    TodoDetailComponent,
    UpdateTodoComponent,
    TodoReactiveFormComponent,
    TodoPipe,
    TodoTemplatedrivenFormComponent,
    TodoDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [TodoDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
