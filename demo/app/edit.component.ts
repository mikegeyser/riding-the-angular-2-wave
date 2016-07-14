import { Component, Input } from '@angular/core';
import { Todo, TodoStore } from './todo.store';

@Component({
    selector: 'edit-todo',
    templateUrl: 'app/edit.template.html'
})
export class EditComponent {
    @Input() todo: Todo;
    todoStore: TodoStore;

    constructor(todoStore: TodoStore) {
        this.todoStore = todoStore;
    }

    toggleCompletion(todo: Todo) {
        this.todoStore.toggleCompletion(todo);
    }

    remove(todo) {
        this.todoStore.remove(todo);
    }

    edit() {
        this.todo.editing = true;
    }

    save(updatedTitle: string) {
        this.todo.title = updatedTitle;
        this.todo.editing = false;
    }

    cancel() {
        this.todo.editing = false;
    }
}