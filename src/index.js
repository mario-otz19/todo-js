// Importar módulos
import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHTML } from './js/componentes';

export const todoList = new TodoList();

// todoList.todos.forEach(todo => crearTodoHTML(todo));

// Función abreviada, sólo funciona cuando es 1 argumento.
todoList.todos.forEach(crearTodoHTML);

/* 
const tarea = new Todo('Aprender JavaScript');
todoList.nuevoTodo(tarea);
tarea.completado = true;
console.log(todoList);
crearTodoHTML(tarea);
*/

// localStorage.setItem('mi-key', 'ABC12345');
// sessionStorage.setItem('mi-key', 'ABC100');

/* 
setTimeout(() => {
    localStorage.removeItem('mi-key');
}, 1500);
tarea.imprimirClase();
*/

/* 
todoList.todos[0].imprimirClase();
console.log('todos', todoList.todos);
*/



