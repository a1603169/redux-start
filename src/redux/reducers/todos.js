import { ADD_TODO, COMPLETE_TODO } from "../actions";

const initialState = [];

export default function todos(prevState = initialState, action) {
  // 초기값을 설정해주는 부분
  // if (prevState === undefined) {
  //   return [];
  // }
  if (action.type === ADD_TODO) {
    return [...prevState, { text: action.text, done: false }];
  }

  if (action.type === COMPLETE_TODO) {
    return prevState.map((todo, i) => {
      if (i === action.i) {
        return { ...todo, done: true };
      }
      return todo;
    });
  }

  return prevState;
}
