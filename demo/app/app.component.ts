import { Component } from '@angular/core';
import { Todo, TodoStore } from './todo.store';
import { CreateComponent } from './create.component';
import { EditComponent } from './edit.component';

@Component({
    selector: 'todo-app',
    templateUrl: 'app/app.template.html',
    directives: [CreateComponent, EditComponent]
})
export class AppComponent {
    todos: Todo[];

    constructor(todoStore: TodoStore) {
        this.todos = todoStore.todos;
    }
}