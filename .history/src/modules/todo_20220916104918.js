import { createAction } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';

export const changeInput = (input) => ({
  type: CHANGE_INPUT,
  input,
});

let id = 3;

export const insert = (text) => ({
  type: INSERT,
  todo: {
    id: id++,
    text,
    done: false,
  },
});

export const toggle = (id) => ({
  type: TOGGLE,
  id,
});

export const remove = (id) => ({
  type: REMOVE,
  id,
});

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