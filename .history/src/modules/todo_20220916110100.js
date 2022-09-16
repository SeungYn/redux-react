import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';
// createAction 사용전
// export const changeInput = (input) => ({
//   type: CHANGE_INPUT,
//   input,
// });

// createAction 사용후
export const changeInput = createAction(CHANGE_INPUT, (input) => input);
let id = 3;

// createAction 사용전
// export const insert = (text) => ({
//   type: INSERT,
//   todo: {
//     id: id++,
//     text,
//     done: false,
//   },
// });

// createAction 사용후
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

// createAction 사용전
// export const toggle = (id) => ({
//   type: TOGGLE,
//   id,
// });

// createAction 사용후
export const toggle = createAction(TOGGLE, (id) => id);

// createAction 사용전
// export const remove = (id) => ({
//   type: REMOVE,
//   id,
// });

// createAction 사용후
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      console.log(action.type);
      console.log(CHANGE_INPUT);
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      console.log(action.type);
      console.log(action.todo);
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      console.log(action.type);
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    case REMOVE:
      console.log(action.type);
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      console.log(action.type);
      return state;
  }
}

export default todos;
