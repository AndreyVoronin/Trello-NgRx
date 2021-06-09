import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { todoReducer, TODO_REDUCER_NODE } from './store/todo/todo.reducer';
import { RouterModule, Routes } from '@angular/router';
import { TodoPageComponent } from './page/todo-page/todo-page.component';

const routes: Routes = [
  {
    path: '',
    component: TodoPageComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(TODO_REDUCER_NODE, todoReducer),
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class TodoModule { }
