import { Component } from '@angular/core';
import { TodoStore } from './todo.store';

@Component({
    selector: 'create-todo',
    templateUrl: 'app/create.template.html'
})
export class CreateComponent {
    title: string;
    todoStore: TodoStore;

    constructor(todoStore: TodoStore){
        this.todoStore = todoStore;
    }

    create() {
        this.todoStore.create(this.title);
        this.title = '';
    }
}