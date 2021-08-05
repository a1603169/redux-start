export const ADD_TODO = 'ADD_TODO';
// action type capital letters

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    // todo: todo
    todo,
  };
}