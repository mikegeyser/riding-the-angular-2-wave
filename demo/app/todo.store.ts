export class Todo {
    title: string;
    completed: boolean;
    editing: boolean;

    constructor(title: string, completed: boolean) {
        this.title = title;
        this.completed = completed;
        this.editing = false;
    }
}

export class TodoStore {
    todos: Todo[];

    constructor() {
        this.todos = [
            new Todo("List todos", true), // This is done!
            new Todo("Add conditional styling", true),
            new Todo("Mark a todo as completed", true),
            new Todo("Add a todo", true),
            new Todo("Delete a todo", true),
            new Todo("Edit a todo", true),
            new Todo("???", true), // Huh?
            new Todo("Profit", false)
        ];
    }

    create(title: string) {
        this.todos.push(new Todo(title, false));
    }

    remove(todo: Todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
    }

    toggleCompletion(todo: Todo) {
        todo.completed = !todo.completed;
    }
}