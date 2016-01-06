import {Component} from 'angular2/core';
import {NgFor, NgIf} from 'angular2/common';

export class TodoItem {
    constructor(public text: string, public completed: boolean) {
        
    }
}

@Component({
    selector: 'my-app',
    templateUrl: 'app.html', directives: [NgFor, NgIf]
})

export class AppComponent2 { 
    todos: Array<TodoItem>;
    
    constructor() {
        this.todos = new Array<TodoItem>();
        
        this.todos.push(new TodoItem("Angular 2.0", false));
        this.todos.push(new TodoItem("ReactiveJS", false));
        this.todos.push(new TodoItem("Android", false));
        this.todos.push(new TodoItem("NodeJS", false));
        this.todos.push(new TodoItem("Grunt", false));
    }
    
    setCompleted(item: TodoItem, checked: boolean) {
        item.completed = checked; 
    }
    
    removeTodo(item: TodoItem, checked: boolean) {
        this.todos.splice(this.todos.indexOf(item), 1);
    }
    
    doneTyping($event) {
        if ($event.which === 13) {
            this.addTodo($event.target);
        }
    }
    
    addTodo(input) {
        this.todos.push(new TodoItem(input.value, false));
        input.value= '';
    }
    
    completeAll(){
        for (var todo of this.todos) {
            todo.completed = true; 
        }
    }
}