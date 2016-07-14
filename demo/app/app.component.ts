import { Component } from '@angular/core';

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
    templateUrl: 'app/app.template.html'
})
export class AppComponent {
    todos: Todo[];

    constructor() {
        this.todos = [
            new Todo("List todos", true), // This is done!
            new Todo("Add conditional styling", true),
            new Todo("Mark a todo as completed", false),
            new Todo("Add a todo", false),
            new Todo("Delete a todo", false),
            new Todo("Edit a todo", false),
            new Todo("???", true), // Huh?
            new Todo("Profit", false)
        ];
    }
}