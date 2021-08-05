import { ADD_TODO } from './actions';

// state 구성
// ['coding', 'having lunch'];

const initialState = [];

export function todoApp(prevState = initialState, action) {
  // 초기값을 설정해주는 부분
  // if (prevState === undefined) {
  //   return [];
  // }

  if(action.type === ADD_TODO) {
    return [...prevState, action.todo]
  }

  return prevState;
}