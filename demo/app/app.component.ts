import { Component } from '@angular/core';
import { Todo, TodoStore } from './todo.store';
import { CreateComponent } from './create.component';

@Component({
    selector: 'todo-app',
    templateUrl: 'app/app.template.html',
    directives: [CreateComponent]
})
export class AppComponent {
    todos: Todo[];
    todoStore: TodoStore;

    constructor(todoStore: TodoStore) {
        this.todoStore = todoStore;
        this.todos = todoStore.todos;
    }

    toggleCompletion(todo: Todo) {
        this.todoStore.toggleCompletion(todo);
    }
}