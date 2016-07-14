import { Component } from '@angular/core';
import { CreateComponent } from './create.component';

class Todo {
    title: string;
    completed: boolean;

    constructor(title: string, completed: boolean) {
        this.title = title;
        this.completed = completed;
    }
}

@Component({
    selector: 'todo-app',
    templateUrl: 'app/app.template.html',
    directives: [CreateComponent]
})
export class AppComponent {
    todos: Todo[];

    constructor() {
        this.todos = [
            new Todo("List todos", true), // This is done!
            new Todo("Add conditional styling", true),
            new Todo("Mark a todo as completed", true),
            new Todo("Add a todo", false),
            new Todo("Delete a todo", false),
            new Todo("Edit a todo", false),
            new Todo("???", true), // Huh?
            new Todo("Profit", false)
        ];
    }

    toggleCompletion(todo: Todo) {
        todo.completed = !todo.completed;
    }
}