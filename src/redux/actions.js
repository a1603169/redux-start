export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";
// action type capital letters

// {type: ADD_TODO, text: 'todo', done: false}
export function addTodo(text) {
  return {
    type: ADD_TODO,
    // todo: todo
    text,
  };
}

// {type: COMPLETE_TODO, i: 3(배열의 아이디)}
export function completeTodo(i) {
  return {
    type: COMPLETE_TODO,
    i,
  };
}

export const SHOW_ALL = "SHOW_ALL";
export const SHOW_COMPLETE = "SHOW_COMPLETE";

export function showAll() {
  return {
    type: SHOW_ALL,
  };
}

export function showComplete() {
  return {
    type: SHOW_COMPLETE,
  };
}
