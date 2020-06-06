import { Todo } from "./todo.class";

export class TodoList {

    constructor() {   
        // this.todos = []; 
        this.cargarLocalStorage(); 
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarEstadoTodo(id) {
        for(const todo of this.todos) {
            
            if(todo.id == id) {                
                
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        // Guardar en el localStorage y convertir los objeto a un String con JSON.stringify().
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage() {
        // Verificar si existe el objeto 'todo'
        this.todos = (localStorage.getItem('todo')) ? JSON.parse(localStorage.getItem('todo')) : [] ;

        // Función abreviada, sólo funciona cuando es 1 argumento.
        this.todos = this.todos.map(Todo.fromJson);
        // this.todos = this.todos.map(obj => Todo.fromJson(obj));
    }
}